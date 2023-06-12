export const gate_left_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const gateLeftWallRailRoot = new GeoJSONLayer({
        url: "./data/foundation/rails/gate_left/floor.gate.left.rail.root.geojson.json"
    });

    const gateLeftRailWall = new GeoJSONLayer({
        url: "./data/foundation/rails/gate_left/floor.gate.left.rail.wall.geojson.json"
    });

    gateLeftWallRailRoot.renderer = {
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

    gateLeftRailWall.renderer = {
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
        gateLeftWallRailRoot,
        gateLeftRailWall
    ]
}