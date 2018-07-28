import {Action} from "redux";
import {UPDATE_TOUR} from "../actions/tour";

export interface Tour {
    idx: number;
    title: string;
    pois: POI[];
}

export interface POI {
    idx: number;
    cartel_number: string;
    title: string;
    subtitle: string;
    short_text: string;
    long_text: string;
    player_type: number;
    medias_roles: MediasRole[];
}

export interface MediasRole {
    media_idx: number;
    role: number;
}

const initialState:Partial<Tour> = {};

export const tour = (state = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_TOUR:
            return action['payload'];
        default:
            return initialState;
    }
};