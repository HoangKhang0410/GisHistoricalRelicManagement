export const back_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const floorBackWallRailRoot = new GeoJSONLayer({
        url: "./data/foundation/rails/back_wall/floor.back.wall.rail.root.geojson.json"
    });

    const floorBackWallRailColumn1 = new GeoJSONLayer({
        url: "./data/foundation/rails/back_wall/floor.back.wall.rail.column1.geojson.json"
    });

    const floorBackWallRailColumn2 = new GeoJSONLayer({
        url: "./data/foundation/rails/back_wall/floor.back.wall.rail.column2.geojson.json"
    });

    const floorBackWallRailWall1 = new GeoJSONLayer({
        url: "./data/foundation/rails/back_wall/floor.back.wall.rail.wall1.geojson.json"
    });

    
    const floorBackWallRailWall2 = new GeoJSONLayer({
        url: "./data/foundation/rails/back_wall/floor.back.wall.rail.wall2.geojson.json"
    });

    const floorBackWallRailWall3 = new GeoJSONLayer({
        url: "./data/foundation/rails/back_wall/floor.back.wall.rail.wall3.geojson.json"
    });



    floorBackWallRailRoot.renderer = {
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

    floorBackWallRailColumn1.renderer = {
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

    floorBackWallRailColumn2.renderer = {
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

    floorBackWallRailWall1.renderer = {
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

    floorBackWallRailWall2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.8,
                    material: {
                        color: "#52565e"    
                    },
                }
            ]
        }
    };

    floorBackWallRailWall3.renderer = {
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
        floorBackWallRailRoot,
        floorBackWallRailColumn1,
        floorBackWallRailColumn2,
        floorBackWallRailWall1,
        floorBackWallRailWall2,
        floorBackWallRailWall3
    ]
}