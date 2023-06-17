const Node = require('../model/node');
const mongoose = require("mongoose")
const Cylinder = require('../model/cylinder');
const { formatObject } = require('../utils/format_geojson')
const { readGeoJsonContent } = require('../utils/read_file');
const { getAllJsonFilePathInFolder } = require('../utils/read_json_path');

const cylinderController = {
  getCylinderByPath: async (req, res) => {
    const path = req.query.path;
    try {
      const cylinder = await Cylinder.find({ path: path }).populate({
        path: 'nodeIds',
      });
      if (!cylinder) return res.status(400).json({ success: false, message: 'Cylinder not found' });
      const result = formatObject(cylinder, "cylinder")
      res.json(result);
    } catch (error) {
      console.log(path + "\n" + error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  saveCylinder: async (req, res) => {
    const { directoryPath } = req.body
    await getAllJsonFilePathInFolder(directoryPath)
      .then(filePaths => {
        filePaths.forEach(async (path) => {
          await readGeoJsonContent(path)
            .then(async data => await saveCylinderData(data))
            .catch((err => {
              console.log(err)
            }))
        })
        res.json({
          success: true,
          message: 'save cylinder successfully!',
        });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ success: false, message: 'Internal server error' });
      });
  },
  deleteCylinder: async (req, res) => {
    try {
      const path = req.query.path;
      await deleteCylinderDocument(path)
      res.json({
        success: true,
        message: 'Delete cylinder successfully!',
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
}

async function saveCylinderData(data) {
  const session = await mongoose.startSession()

  try {
    await session.withTransaction(async () => {
      for (const cylinderData of data) {
        const nodeIds = await Node.insertMany(cylinderData.nodes, { session })

        const cylinder = {
          "nodeIds": nodeIds,
          "height": cylinderData.height,
          "width": cylinderData.width,
          "color": cylinderData.color,
          "name": cylinderData.name,
          "path": cylinderData.path
        }
        await Cylinder.create([cylinder], { session })
      }
    }, {
      readPreference: 'primary',
      writeConcern: { w: 'majority' },
      maxTimeMS: 10000
    })

    console.log("The saveCylinderData was successfully created.");
  } catch (error) {
    console.log("The saveCylinderData was aborted due to an unexpected error: " + error);
    throw error
  } finally {
    session.endSession();
  }
}

async function deleteCylinderDocument(path) {
  const session = await mongoose.startSession()
  try {
    await session.withTransaction(async () => {
      const deleteCylinderDocs = await Cylinder.find({ path })
      if (deleteCylinderDocs.length != 0) {
        const cylinder = await Cylinder.deleteMany({ path }, { session })
        if (cylinder) {
          const nodeIds = deleteCylinderDocs.flatMap(deleteCylinder => deleteCylinder.nodeIds)
          await Node.deleteMany({ _id: { $in: nodeIds } }, { session })
        }
      } else {
        console.log("Not found any cylinder with path: " + path);
      }
    }, {
      readPreference: 'primary',
      writeConcern: { w: 'majority' },
      maxTimeMS: 10000
    })

  } catch (error) {
    console.log("The deleteCylinderDocument was aborted due to an unexpected error: " + error);
    throw error
  } finally {
    session.endSession();
  }
}


module.exports = cylinderController