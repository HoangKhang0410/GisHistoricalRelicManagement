const Prism = require('../model/prism');
const Node = require('../model/node');
const Face = require('../model/face');
const mongoose = require("mongoose")
const { readGeoJsonContent } = require('../utils/read_file');
const { formatObject } = require('../utils/format_geojson')
const { getAllJsonFilePathInFolder } = require('../utils/read_json_path');

const prismController = {
  savePrism: async (req, res) => {
    const { directoryPath } = req.body
    await getAllJsonFilePathInFolder(directoryPath)
      .then(filePaths => {
        filePaths.forEach(async (path) => {
          await readGeoJsonContent(path)
            .then(async data => await savePrismData(data))
            .catch((err => {
              console.log(err)
            }))
        })
        res.json({
          success: true,
          message: 'save prism successfully!',
        });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ success: false, message: 'Internal server error' });
      });
  },
  getPrismByPath: async (req, res) => {
    const path = req.query.path;
    try {
      const prism = await Prism.find({ path: path }).populate({
        path: 'faceID',
        populate: {
          path: 'nodeIds',
        }
      });
      if (!prism) return res.status(400).json({ success: false, message: 'prism not found' });
      const result = formatObject(prism, "prism")
      res.json(result);
    } catch (error) {
      console.log(path + "\n" + error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  deletePrism: async (req, res) => {
    try {
      const path = req.query.path;
      await deletePrismDocument(path)
      res.json({
        success: true,
        message: 'Delete prism successfully!',
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  deleteMultiPrism: async (req, res) => {
    try {
      const {paths} = req.body;

      for(const path of paths) {
        await deletePrismDocument(path)
      }
      
      res.json({
        success: true,
        message: 'Delete prism successfully!',
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
}

async function savePrismData(data) {
  const session = await mongoose.startSession()

  try {
    await session.withTransaction(async () => {
      for (const prismData of data) {
        const nodeIds = await Node.insertMany(prismData.nodes, { session })
        const face = {
          "nodeIds": nodeIds,
        }
        const faceResult = await Face.create([face], { session })

        const prism = {
          "faceID": faceResult[0]._id,
          "height": prismData.height,
          "width": prismData.width,
          "color": prismData.color,
          "name": prismData.name,
          "path": prismData.path
        }
        await Prism.create([prism], { session })
      }
    }, {
      readPreference: 'primary',
      writeConcern: { w: 'majority' },
      maxTimeMS: 10000
    })

    console.log("The savePrismData was successfully created.");
  } catch (error) {
    console.log("The transaction was aborted due to an unexpected error: " + error);
  } finally {
    session.endSession();
  }
}

async function deletePrismDocument(path) {
  const session = await mongoose.startSession()
  try {
    await session.withTransaction(async () => {
      const deletePrismDocs = await Prism.find({ path })
      if (deletePrismDocs.length != 0) {
        const cylinder = await Prism.deleteMany({ path }, { session })
        if (cylinder) {
          const faceIds = deletePrismDocs.map(deletePrism => deletePrism.faceID)
          const deleteFaceDocs = await Face.find({ _id: { $in: faceIds } })

          await Face.deleteMany({ _id: { $in: faceIds } }, { session })

          const nodeIds = deleteFaceDocs.flatMap(deleteFace => deleteFace.nodeIds)
          await Node.deleteMany({ _id: { $in: nodeIds } }, { session })
        }
      } else {
        console.log("Not found any prism with path: " + path);
      }
    }, {
      readPreference: 'primary',
      writeConcern: { w: 'majority' },
      maxTimeMS: 10000
    })

  } catch (error) {
    console.log("The deletePrismDocument was aborted due to an unexpected error: " + error);
    throw error
  } finally {
    session.endSession();
  }
}


module.exports = prismController


