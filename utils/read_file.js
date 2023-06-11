const fs = require('fs');
const {getAllJsonFilePathInFolder} = require('./read_json_path.js');


const directoryPath = '../data/foundation/doors/center_entry';


function readGeoJsonContent(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        var parentPath = "ngomon/"
        var path = filePath.split("\\")
        path.splice(0, 2)
        path = parentPath + path.join("/")
        //console.log(path)
      
        const json = JSON.parse(data);
        var resultData = {}
        resultData.name = json.features[0].properties["Building name"]
        resultData.color = json.features[0].properties.color
        resultData.width = json.features[0].properties.width
        resultData.height = json.features[0].properties.height
        resultData.path = path
        if(json.features[0].geometry.type == "Polygon") {
          resultData.nodes = json.features[0].geometry.coordinates[0].map(node => ({
              ["x"]: node[0],
              ["y"]: node[1],
              ["z"]: node[2]
          }))
        } else {
          var faces = json.features[0].geometry.coordinates
          resultData.faces = faces.map(face =>  face[0].map(node => ({
              ["x"]: node[0],
              ["y"]: node[1],
              ["z"]: node[2]
          })))
        }
       
        callback(resultData)
      });
}

// getAllJsonFilePathInFolder(directoryPath)
// .then(filePaths => filePaths.forEach((path) => {
//     readGeoJsonContent(path, (data) => {
//         console.log(data)
//     })
// }))
// .catch(err => console.error(err));

module.exports = {readGeoJsonContent}


