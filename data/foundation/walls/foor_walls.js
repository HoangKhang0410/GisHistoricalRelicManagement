import { back_wall } from "./back_wall/back_wall.js";
import { entry_wall } from "./entry_wall/entry_wall.js";
import { left_wall } from "./left_wall/left_wall.js";
import { right_wall } from "./right_wall/right_wall.js";
import { left_front_wall } from "./left_front_wall/left_front_wall.js";
import { right_front_wall } from "./right_front_wall/right_front_wall.js";
import { left_step_wall } from "./left_step_wall/left_step_wall.js";
import { right_step_wall } from "./right_step_wall/right_step_wall.js";
import { top_wall } from "./top_wall/top_wall.js";

export const floor_walls = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const backWall = back_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const entryWall = entry_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const leftWall = left_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const rightWall = right_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const leftFrontWall = left_front_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
        
    const rightFrontWall = right_front_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const leftStepWall = left_step_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const rightStepWall = right_step_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
        
    const topWall = top_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    return [
        ...backWall,
        ...entryWall,
        ...leftWall,
        ...rightWall,
        ...leftFrontWall,
        ...rightFrontWall,
        ...leftStepWall,
        ...rightStepWall,
        ...topWall
    ]
}