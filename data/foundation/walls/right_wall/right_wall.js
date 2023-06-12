export const right_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const rightWallPart1 = new GeoJSONLayer({
        url: "./data/foundation/walls/right_wall/floor.right.wall.part1.geojson.json"
    });

    const rightWallPart2 = new GeoJSONLayer({
        url: "./data/foundation/walls/right_wall/floor.right.wall.part2.geojson.json"
    });

    



    rightWallPart1.renderer = {
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

    rightWallPart2.renderer = {
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
        rightWallPart1,
        rightWallPart2,
    ]
}