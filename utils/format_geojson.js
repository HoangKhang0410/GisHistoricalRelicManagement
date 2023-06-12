const formatObject = (data) => {
  const coordinates = data.map(item => {
    return item.faceID.nodeIds.map(node => {
      return [node.x, node.y, node.z]
    })
  })
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
          "type": "Polygon",
          "coordinates": coordinates
        }
      }
    ]
  }
  return result
}

module.exports = { formatObject }