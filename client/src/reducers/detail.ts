import {POI} from "./tour";
import {Action} from "redux";
import {UPDATE_DETAIL} from "../actions/detail";

const initialState:Partial<POI> = {};

const detail = (state = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_DETAIL:
            return action['payload'];
        default:
            return state;
    }
};

export default detail;