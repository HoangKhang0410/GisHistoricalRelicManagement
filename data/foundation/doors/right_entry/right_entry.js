export const right_entry = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const leftWallRightEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/foundation/doors/right_entry/left_wall.geojson.json"
  });

  const rightWallRightEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/foundation/doors/right_entry/right_wall.geojson.json"
  });

  const topWallRightEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/foundation/doors/right_entry/top_wall.geojson.json"
  });

  leftWallRightEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.94,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  rightWallRightEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.94,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  topWallRightEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.5,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };
  return [
    leftWallRightEntryGeojsonLayer,
    rightWallRightEntryGeojsonLayer,
    topWallRightEntryGeojsonLayer
  ]
}