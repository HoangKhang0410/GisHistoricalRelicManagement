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
      console.log(result)
      res.json(result);
    } catch (error) {
      console.log(error)
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
  }
}

async function saveBodyCompData(data) {
  const session = await mongoose.startSession()

  try {
      await session.withTransaction(async () => {
          var funcSaveDatas = data.map(async bodyCompData => {
              const faceIds = []

              for(const face of bodyCompData.faces) {
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
  } finally {
      session.endSession();
  }
}

module.exports = bodyComplexController