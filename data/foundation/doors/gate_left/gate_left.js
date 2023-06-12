export const gate_left_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const GateLefWall = new GeoJSONLayer({
        url: "./data/foundation/doors/gate_left/gate_left.json"
    });

    const GateLeftDoor = new GeoJSONLayer({
        url: "./data/foundation/doors/gate_left/gate_left_door.json"
    });

    const GateLeftTopDoor = new GeoJSONLayer({
        url: "./data/foundation/doors/gate_left/gate_left_door_top.json"
    });


    GateLefWall.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1.55,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    GateLeftDoor.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 2.29,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };
    
    GateLeftTopDoor.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    return [
        GateLefWall,
        GateLeftDoor,
        GateLeftTopDoor
    ]
}