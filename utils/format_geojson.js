const formatObject = (data, type) => {
  var coordinates, polygonType, materials, name
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
  materials = data.map(item => {
    return item.materialIds.map(material => {
      return {
        material: material.materialId,
        ageStartTime: material.ageStartTime
      }
    })
  })
  name = materials.flat().map(item => {
    return item.material.name
  }).join(", ")
  let message = []
  const isGood = materials.flat().every(item => {
    different = Math.ceil((new Date().getTime() - item.ageStartTime.getTime()) / (1000 * 60 * 60 * 24 * 365))
    return item.material.age > different && item.material.age - different > 1
  })
  const isBad = materials.flat().some(item => {
    different = Math.ceil((new Date().getTime() - item.ageStartTime.getTime()) / (1000 * 60 * 60 * 24 * 365))
    return item.material.age <= different
  })

  materials.flat().forEach(item => {
    different = Math.ceil((new Date().getTime() - item.ageStartTime.getTime()) / (1000 * 60 * 60 * 24 * 365))
    if (item.material.age - different <= 1 && item.material.age > different) {
      message.push(`${item.material.name} sắp quá tuổi thọ`)
    }
  })
  if (isGood) {
    message.push("Còn tốt")
  }

  if (isBad) {
    message.push("Đã hỏng")
  }

  const result = {
    "type": "FeatureCollection",
    "generator": "NHÓM 1",
    "copyright": "Nhóm 1",
    "timestamp": new Date().toISOString(),
    "features": [
      {
        "type": "Feature",
        "properties": {
          "Building name": data[0].name,
          "Id": data[0]._id,
          "Path": data[0].path,
          "height": data[0].height,
          "width": data[0].width,
          "color": data[0].color,
          "Materials": name,
          "message": message.join(", "),
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