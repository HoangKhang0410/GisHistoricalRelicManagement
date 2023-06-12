export const left_front_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const floorLeftFrontWallRailRoot = new GeoJSONLayer({
        url: "./data/foundation/rails/left_front_wall/floor.left.front.wall.rail.root.geojson.json"
    });

    const floorLeftFrontWallRailColumn1 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_front_wall/floor.left.front.wall.rail.column1.geojson.json"
    });

    const floorLeftFrontWallRailWall = new GeoJSONLayer({
        url: "./data/foundation/rails/left_front_wall/floor.left.front.wall.rail.wall.geojson.json"
    });

    floorLeftFrontWallRailRoot.renderer = {
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

    floorLeftFrontWallRailColumn1.renderer = {
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

    floorLeftFrontWallRailWall.renderer = {
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
        floorLeftFrontWallRailRoot,
        floorLeftFrontWallRailColumn1,
        floorLeftFrontWallRailWall
    ]
}