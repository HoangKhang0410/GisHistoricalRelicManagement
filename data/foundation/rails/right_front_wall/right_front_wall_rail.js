export const right_front_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const floorRightFrontWallRailRoot = new GeoJSONLayer({
        url: "./data/foundation/rails/right_front_wall/floor.right.front.wall.rail.root.geojson.json"
    });

    const floorRightFrontWallRailColumn1 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_front_wall/floor.right.front.wall.rail.column1.geojson.json"
    });

    const floorRightFrontWallRailWall = new GeoJSONLayer({
        url: "./data/foundation/rails/right_front_wall/floor.right.front.wall.rail.wall.geojson.json"
    });

    floorRightFrontWallRailRoot.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };


    floorRightFrontWallRailColumn1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1,
                    material: {
                        color: "#7a443a"
                    },
                }
            ]
        }
    };

    floorRightFrontWallRailWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.8,
                    material: {
                        color: "#ab5c2f"
                    },
                }
            ]
        }
    };
    

    return [
        floorRightFrontWallRailRoot,
        floorRightFrontWallRailColumn1,
        floorRightFrontWallRailWall
    ]
}