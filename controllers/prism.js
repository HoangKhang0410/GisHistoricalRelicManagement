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
        const transactionResults = await session.withTransaction(async () => {
            console.log("data: " + data[0].path);
            var funcSaveDatas = data.map(async prismData => {
                const nodeIds = await Node.insertMany(prismData.nodes, {session})
                const face = {
                    "nodeIds": nodeIds,
                }
                const faceResult = await Face.create([face], { session })

                const prism = {
                    "faceID": faceResult._id,
                    "height": prismData.height,
                    "width": prismData.width,
                    "color": prismData.color,
                    "name": prismData.name,
                    "path": prismData.path
                }
                await Prism.create([prism], { session })
            })

            await Promise.all(funcSaveDatas)
        })

        console.log("The savePrismData result: " + transactionResults);
        if (transactionResults) {
            console.log("The savePrismData was successfully created.");
        } else {
            console.log("The savePrismData was intentionally aborted.");
        }
        
        return transactionResults
    } catch (error) {
        console.log("The transaction was aborted due to an unexpected error: " + e);
    } finally {
        session.endSession();
        return null
    }
}

module.exports = prismController


