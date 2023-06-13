const Node = require('../model/node');
const Prism = require('../model/prism');
const Face = require('../model/face');
const mongoose = require("mongoose")
const { readGeoJsonContent } = require('../utils/read_file');
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
    }
}

async function savePrismData(data) {
    const session = await mongoose.startSession()

    try {
        await session.withTransaction(async () => {
            console.log("data: " + data[0].path);
            for(const prismData of data) {
                const nodeIds = await Node.insertMany(prismData.nodes, {session})
                const face = {
                    "nodeIds": nodeIds,
                }
                const faceResult = await Face.create([face], { session })

                console.log(faceResult[0]._id)

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

module.exports = prismController


