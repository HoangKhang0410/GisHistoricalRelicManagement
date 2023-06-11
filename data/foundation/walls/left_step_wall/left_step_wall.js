export const left_step_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const leftWall = new GeoJSONLayer({
        url: "./data/foundation/walls/left_step_wall/floor.left.step.left.wall.geojson.json"
    });

    const rightWall = new GeoJSONLayer({
        url: "./data/foundation/walls/left_step_wall/floor.left.step.right.wall.geojson.json"
    });

    



    leftWall.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.94,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    rightWall.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.94,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    

    return [
        leftWall,
        rightWall,
    ]
}