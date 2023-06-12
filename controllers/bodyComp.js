const Node = require('../model/node');
const Face = require('../model/face');
const BodyComplex = require('../model/body_complex');
const mongoose = require("mongoose")
const { readGeoJsonContent } = require('../utils/read_file');
const { getAllJsonFilePathInFolder } = require('../utils/read_json_path');

const bodyCompController = {
    saveBodyComp: async (req, res) => {
        const { directoryPath } = req.body
        await getAllJsonFilePathInFolder(directoryPath)
            .then(filePaths => {
                console.log("filePaths size: " + filePaths.length)
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
                var nodeCount = 0
                var savedNodeCount = 0
                const faceIds = bodyCompData.faces.map(async face => {
                    nodeCount += face.length
                    const nodeIds = await Node.insertMany(face, {session})
                    savedNodeCount += nodeIds.length
                    const faceData = {
                        "nodeIds": nodeIds,
                    }
                    const faceResult = await Face.create([faceData], { session })
                    return faceResult._id
                })

                const faceIdsResult = []

                faceIds.reduce((previousPromise, currentPromise) => {
                    return previousPromise.then(() => {
                        return currentPromise;
                    });
                }, Promise.resolve())
                .then(result => {
                    faceIdsResult = [...result]
                    console.log("All promises completed successfully", result);
                })
                .catch(error => {
                    console.error("An error occurred", error);
                });

                const bodyComp = {
                    "faceIDs": faceIdsResult,
                    "height": bodyCompData.height,
                    "width": bodyCompData.width,
                    "color": bodyCompData.color,
                    "name": bodyCompData.name,
                    "path": bodyCompData.path
                }
                await BodyComplex.create([bodyComp], { session })
            })

           for(const funSaveData of funcSaveDatas) await funSaveData;
        })

        console.log("The saveBodyCompData was successfully created.");
    } catch (error) {
        console.log("The transaction was aborted due to an unexpected error: " + error);
    } finally {
        session.endSession();
    }
}

module.exports = bodyCompController

