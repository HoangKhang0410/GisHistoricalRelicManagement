export const center_entry = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const leftWallCenterEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/foundation/doors/center_entry/left_wall.geojson.json"
  });

  const rightWallCenterEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/foundation/doors/center_entry/right_wall.geojson.json"
  });

  const topWallCenterEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/foundation/doors/center_entry/top_wall.geojson.json"
  });

  rightWallCenterEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.44,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  leftWallCenterEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.44,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  topWallCenterEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.2,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  return [
    leftWallCenterEntryGeojsonLayer,
    rightWallCenterEntryGeojsonLayer,
    topWallCenterEntryGeojsonLayer
  ]
}