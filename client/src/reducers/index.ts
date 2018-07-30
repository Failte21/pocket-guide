import {POI, tour, Tour} from "./tour";
import {combineReducers} from "redux";
import detail from "./detail";

export interface ApplicationState {
    tour: Tour;
    detail: POI;
}

export default combineReducers({tour, detail});