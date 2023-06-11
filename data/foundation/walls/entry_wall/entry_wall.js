export const entry_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const entryWallPart1 = new GeoJSONLayer({
        url: "./data/foundation/walls/entry_wall/floor.entry.wall.part1.geojson.json"
    });

    const entryWallPart2 = new GeoJSONLayer({
        url: "./data/foundation/walls/entry_wall/floor.entry.wall.part2.geojson.json"
    });


    const entryWallPart3 = new GeoJSONLayer({
        url: "./data/foundation/walls/entry_wall/floor.entry.wall.part3.geojson.json"
    });


    const entryWallPart4 = new GeoJSONLayer({
        url: "./data/foundation/walls/entry_wall/floor.entry.wall.part4.geojson.json"
    });


    const entryWallPart5 = new GeoJSONLayer({
        url: "./data/foundation/walls/entry_wall/floor.entry.wall.part5.geojson.json"
    });


    const entryWallPart6 = new GeoJSONLayer({
        url: "./data/foundation/walls/entry_wall/floor.entry.wall.part6.geojson.json"
    });


    



    entryWallPart1.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    entryWallPart2.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    entryWallPart3.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    entryWallPart4.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    entryWallPart5.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    entryWallPart6.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    

    return [
        entryWallPart1,
        entryWallPart2,
        entryWallPart3,
        entryWallPart4,
        entryWallPart5,
        entryWallPart6
    ]
}