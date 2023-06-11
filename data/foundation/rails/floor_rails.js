import { left_wall_rail } from "./left_wall/left_wall_rail.js"
import { right_wall_rail } from "./right_wall/right_wall_rail.js"
import { entry_wall_rail } from "./entry_wall/entry_wall_rail.js"
import { left_front_wall_rail } from "./left_front_wall/left_front_wall_rail.js"
import { right_front_wall_rail } from "./right_front_wall/right_front_wall_rail.js"
import { back_wall_rail } from "./back_wall/back_wall_rail.js"
import { gate_left_rail } from "./gate_left/gate_left_rail.js"
import { gate_right_rail } from "./gate_right/gate_right_rail.js"

export const floor_rails = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const left_rails = left_wall_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const right_rails = right_wall_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const entry_rails = entry_wall_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    const left_front_rails = left_front_wall_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    const right_front_rails = right_front_wall_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    const back_wall_rails = back_wall_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    const gate_left_rails = gate_left_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const gate_right_rails = gate_right_rail(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    return [
        ...left_rails,
        ...right_rails,
        ...entry_rails,
        ...left_front_rails,
        ...right_front_rails,
        ...back_wall_rails,
        ...gate_left_rails,
        ...gate_right_rails
    ]
}