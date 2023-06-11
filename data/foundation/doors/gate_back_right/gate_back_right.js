export const gate_back_right_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const GateRightWall = new GeoJSONLayer({
        url: "./data/foundation/doors/gate_back_right/gate_back_right.json"
    });

    const GateRightDoor = new GeoJSONLayer({
        url: "./data/foundation/doors/gate_back_right/gate_back_right_door.json"
    });

    const GateRightTopDoor = new GeoJSONLayer({
        url: "./data/foundation/doors/gate_back_right/gate_back_right_door_top.json"
    });


    GateRightWall.renderer = {
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

    GateRightDoor.renderer = {
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
    
    GateRightTopDoor.renderer = {
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
        GateRightWall,
        GateRightDoor,
        GateRightTopDoor
    ]
}