import {tour, Tour} from "./tour";
import {combineReducers} from "redux";

export interface ApplicationState {
    tour: Tour;
}

export default combineReducers({tour});