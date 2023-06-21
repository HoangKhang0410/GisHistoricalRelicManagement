const Node = require('../model/node');
const Face = require('../model/face');
const BodyComplex = require('../model/body_complex');
const mongoose = require("mongoose")
const { formatObject } = require('../utils/format_geojson')
const { readGeoJsonContent } = require('../utils/read_file');
const { getAllJsonFilePathInFolder } = require('../utils/read_json_path');

const bodyComplexController = {
  getBodyComplexByPath: async (req, res) => {
    const path = req.query.path;
    try {
      const bodyComplex = await BodyComplex.find({ path: path }).populate({
        path: 'faceIDs',
        populate: {
          path: 'nodeIds',
        }
      });
      if (!bodyComplex) return res.status(400).json({ success: false, message: 'BodyComplex not found' });
      const result = formatObject(bodyComplex, "bodyComplex")
      res.json(result);
    } catch (error) {
      console.log(path + "\n" + error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  saveBodyComp: async (req, res) => {
    const { directoryPath } = req.body
    await getAllJsonFilePathInFolder(directoryPath)
      .then(filePaths => {
        filePaths.forEach(async (path) => {
          await readGeoJsonContent(path)
            .then(async data => await saveBodyCompData(data))
            .catch((err => {
              console.log(err)
            }))
        })
        res.json({
          success: true,
          message: 'save body comp successfully!',
        });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ success: false, message: 'Internal server error' });
      });
  },
  deleteBodyComp: async (req, res) => {
    try {
      const path = req.query.path;
      await deleteBodyCompDocument(path)
      res.json({
        success: true,
        message: 'Delete body comp successfully!',
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  updateBodyComp: async (req, res) => {
    updateBodyCompData(req, res)
  },
  addMaterialForManyBodyComp: (req, res) => {
    addMaterialData(req, res)
  }
}

async function updateBodyCompData(req, res) {
  try {
    const path = req.query.path;
    const newData = req.body;

    const updatedResult = await BodyComplex.findOneAndUpdate({ path }, newData, { new: true });
    if (updatedResult) {
      return res.send(updatedResult);
    }

    res.status(404).send(`Record with path ${path} not found.`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

async function saveBodyCompData(data) {
  const session = await mongoose.startSession()

  try {
    await session.withTransaction(async () => {
      var funcSaveDatas = data.map(async bodyCompData => {
        const faceIds = []

        for (const face of bodyCompData.faces) {
          const nodeIds = await Node.insertMany(face, { session })
          const faceData = {
            "nodeIds": nodeIds,
          }
          const faceResult = await Face.create([faceData], { session })
          faceIds.push(faceResult[0]._id)
        }

        const bodyComp = {
          "faceIDs": faceIds,
          "height": bodyCompData.height,
          "width": bodyCompData.width,
          "color": bodyCompData.color,
          "name": bodyCompData.name,
          "path": bodyCompData.path
        }
        await BodyComplex.create([bodyComp], { session })
      })

      for (const funSaveData of funcSaveDatas) await funSaveData;
    }, {
      readPreference: 'primary',
      writeConcern: { w: 'majority' },
      maxTimeMS: 10000
    })

    console.log("The saveBodyCompData was successfully created.");
  } catch (error) {
    console.log("The transaction was aborted due to an unexpected error: " + error);
    throw error
  } finally {
    session.endSession();
  }
}

async function deleteBodyCompDocument(path) {
  const session = await mongoose.startSession()
  try {
    await session.withTransaction(async () => {
      const deleteBodyCompDocs = await BodyComplex.find({ path })
      if (deleteBodyCompDocs.length != 0) {
        const bodyComp = await BodyComplex.deleteMany({ path }, { session })
        if (bodyComp) {
          const faceIds = deleteBodyCompDocs.flatMap(deleteBodyComp => deleteBodyComp.faceIDs)
          const deleteFaceDocs = await Face.find({ _id: { $in: faceIds } })

          await Face.deleteMany({ _id: { $in: faceIds } }, { session })

          const nodeIds = deleteFaceDocs.flatMap(deleteFace => deleteFace.nodeIds)
          await Node.deleteMany({ _id: { $in: nodeIds } }, { session })
        }
      } else {
        console.log("Not found any body comp with path: " + path);
      }
    }, {
      readPreference: 'primary',
      writeConcern: { w: 'majority' },
      maxTimeMS: 10000
    })

  } catch (error) {
    console.log("The deleteBodyCompDocument was aborted due to an unexpected error: " + error);
    throw error
  } finally {
    session.endSession();
  }
}

async function addMaterialData(req, res) {
  try {
    const { materials, paths } = req.body
    const filter = { path: { $in: paths } };
    const update = { $set: { materialIds: materials } };
    const options = { multi: true };
    
    const updateData = await BodyComplex.updateMany(filter, update, options);

    if (updateData) {
      return res.send(updateData);
    }

    res.status(500).send(`Can't add material.`);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}



module.exports = bodyComplexController