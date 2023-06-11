export const left_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const floorLeftWallRailRoot = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.root.geojson.json"
    });

    const floorLeftWallRailColumn1 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.column1.geojson.json"
    });

    const floorLeftWallRailColumn2 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.column2.geojson.json"
    });

    const floorLeftWallRailColumn3 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.column3.geojson.json"
    });

    const floorLeftWallRailColumn4 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.column4.geojson.json"
    });

    const floorLeftWallRailColumn5 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.column5.geojson.json"
    });

    const floorLeftWallRailWall1 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.wall1.geojson.json"
    });

    const floorLeftWallRailWall2 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.wall2.geojson.json"
    });

    const floorLeftWallRailWall3 = new GeoJSONLayer({
        url: "./data/foundation/rails/left_wall/floor.left.wall.rail.wall3.geojson.json"
    });

    floorLeftWallRailRoot.renderer = {
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

    floorLeftWallRailColumn1.renderer = {
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

    floorLeftWallRailColumn2.renderer = {
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

    floorLeftWallRailColumn3.renderer = {
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

    floorLeftWallRailColumn4.renderer = {
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

    floorLeftWallRailColumn5.renderer = {
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

    floorLeftWallRailWall1.renderer = {
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

    floorLeftWallRailWall2.renderer = {
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


    floorLeftWallRailWall3.renderer = {
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
        floorLeftWallRailRoot,
        floorLeftWallRailColumn1,
        floorLeftWallRailColumn2,
        floorLeftWallRailColumn3,
        floorLeftWallRailColumn4,
        floorLeftWallRailColumn5,
        floorLeftWallRailWall1,
        floorLeftWallRailWall2,
        floorLeftWallRailWall3
    ]
}