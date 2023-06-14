const formatObject = (data, type) => {
  var coordinates, polygonType
  switch (type) {
    case "prism":
      coordinates = data.map(item => {
        return item.faceID.nodeIds.map(node => {
          return [node.x, node.y, node.z]
        })
      })
      polygonType = "Polygon"
      break;
    case "cylinder":
      coordinates = data.map(item => {
        return item.nodeIds.map(node => {
          return [node.x, node.y, node.z]
        })
      })
      polygonType = "Polygon"
      break;
    case "bodyComplex":
      coordinates = data.map(item => {
        return item.faceIDs.map(face => {
          const temp = face.nodeIds.map(node => {
            return [node.x, node.y, node.z]
          })
          return [temp]
        })
      })
      coordinates = coordinates[0]
      polygonType = "MultiPolygon"
      break;
    default:
      break;
  }
  const result = {
    "type": "FeatureCollection",
    "generator": "smartcity",
    "copyright": "Smartcity",
    "timestamp": "2021-05-27T09:28:58Z",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "Building name": data[0].name,
          "height": data[0].height,
          "width": data[0].width,
          "color": data[0].color,
          "idb": "1"
        },
        "geometry": {
          "type": polygonType,
          "coordinates": coordinates
        }
      }
    ]
  }
  return result
}

module.exports = { formatObject }