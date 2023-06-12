export const left_front_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const leftFrontWall = new GeoJSONLayer({
        url: "./data/foundation/walls/left_front_wall/floor.left.front.wall.geojson.json"
    });
    

    leftFrontWall.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };
    

    return [
        leftFrontWall
    ]
}