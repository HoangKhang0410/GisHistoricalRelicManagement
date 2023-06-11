export const right_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const floorRightWallRailRoot = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.root.geojson.json"
    });

    const floorRightWallRailColumn1 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.column1.geojson.json"
    });

    const floorRightWallRailColumn2 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.column2.geojson.json"
    });

    const floorRightWallRailColumn3 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.column3.geojson.json"
    });

    const floorRightWallRailColumn4 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.column4.geojson.json"
    });

    const floorRightWallRailColumn5 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.column5.geojson.json"
    });


    const floorRightWallRailWall1 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.wall1.geojson.json"
    });

    const floorRightWallRailWall2 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.wall2.geojson.json"
    });

    const floorRightWallRailWall3 = new GeoJSONLayer({
        url: "./data/foundation/rails/right_wall/floor.right.wall.rail.wall3.geojson.json"
    });



    

    floorRightWallRailRoot.renderer = {
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

    floorRightWallRailColumn1.renderer = {
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

    floorRightWallRailColumn2.renderer = {
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

    floorRightWallRailColumn3.renderer = {
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

    floorRightWallRailColumn4.renderer = {
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

    floorRightWallRailColumn5.renderer = {
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

    floorRightWallRailWall1.renderer = {
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

    floorRightWallRailWall2.renderer = {
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

    floorRightWallRailWall3.renderer = {
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
        floorRightWallRailRoot,
        floorRightWallRailColumn1,
        floorRightWallRailColumn2,
        floorRightWallRailColumn3,
        floorRightWallRailColumn4,
        floorRightWallRailColumn5,
        floorRightWallRailWall1,
        floorRightWallRailWall2,
        floorRightWallRailWall3
    ]
}