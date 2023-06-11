export const top_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const topWallPart1 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part1.geojson.json"
    });

    const topWallPart2 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part2.geojson.json"
    });
    
    const topWallPart3 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part3.geojson.json"
    });

    const topWallPart4 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part4.geojson.json"
    });

    const topWallPart5 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part5.geojson.json"
    });

    const topWallPart6 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part6.geojson.json"
    });

    const topWallPart7 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part7.geojson.json"
    });

    const topWallPart8 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part8.geojson.json"
    });



    topWallPart1.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };

    topWallPart2.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };

    topWallPart3.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };

    topWallPart4.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };
    

    topWallPart5.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };

    topWallPart6.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };
    
    topWallPart7.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };

    topWallPart8.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#4f332a"
                    },
                }
            ]
        }
    };

    return [
        topWallPart1,
        topWallPart2,
        topWallPart3,
        topWallPart4,
        topWallPart5,
        topWallPart6,
        topWallPart7,
        topWallPart8
    ]
}