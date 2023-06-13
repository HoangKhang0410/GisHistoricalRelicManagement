const fs = require('fs');


const directoryPath = '../data/foundation/doors/center_entry';


function readGeoJsonContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(err)
        return;
      }

      var parentPath = "ngomon/"
      var path = filePath.split("\\")
      path.splice(0, 2)
      path = parentPath + path.join("/")
      console.log(path)

      const json = JSON.parse(data);
      var resultData = []
      if (json.features[0].geometry.type == "Polygon") {

        json.features[0].geometry.coordinates.forEach((nodes) => {
          var data = {}
          data.name = json.features[0].properties["Building name"]
          data.color = json.features[0].properties.color
          data.width = json.features[0].properties.width
          data.height = json.features[0].properties.height
          data.path = path
          data.nodes = nodes.map(node => ({
            ["x"]: node[0],
            ["y"]: node[1],
            ["z"]: node[2]
          }))
          resultData.push(data)
        });
      } else {
        var faces = json.features[0].geometry.coordinates
        var data = {}
        data.name = json.features[0].properties["Building name"]
        data.color = json.features[0].properties.color
        data.width = json.features[0].properties.width
        data.height = json.features[0].properties.height
        data.path = path
        data.faces = faces.map(face => face[0].map(node => ({
          ["x"]: node[0],
          ["y"]: node[1],
          ["z"]: node[2]
        })))
        resultData.push(data)
      }

      resolve(resultData)
    });
  })
}

module.exports = { readGeoJsonContent }


