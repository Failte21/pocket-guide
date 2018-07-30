import {Action} from "redux";
import {UPDATE_TOUR} from "../actions/tour";
import {UPDATE_SM_IMG} from "../actions/poi";
import { cloneDeep } from 'lodash';

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
    sm_img: string,
    lg_img: string
}

export interface MediasRole {
    media_idx: number;
    role: number;
}

const initialState:Partial<Tour> = {
    pois: []
};

export const tour = (state = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_TOUR:
            return action['payload'];
        case UPDATE_SM_IMG:
            //todo: Ugly procedural stuff
            const clonedTour = cloneDeep(state);
            const poi = (clonedTour.pois || []).find(p => p.idx === action['payload']['poiId']);
            (poi || {})['sm_img'] = action['payload']['data'];
            return clonedTour;
        default:
            return initialState;
    }
};