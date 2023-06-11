export const right_front_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const rightFrontWall = new GeoJSONLayer({
        url: "./data/foundation/walls/right_front_wall/floor.right.front.wall.geojson.json"
    });
    

    rightFrontWall.renderer = {
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
        rightFrontWall
    ]
}