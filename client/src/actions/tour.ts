import {handleError} from "./errors";

export const UPDATE_TOUR = 'UPDATE_TOUR';
import axios from 'axios';
import {Dispatch} from "redux";

export const updateTour = (tourId: string) => (dispatch: Dispatch) => {
    axios.get(`/api/tours/${tourId}`)
        .then(({data}) => {
            dispatch({type: UPDATE_TOUR, payload: data});
        })
        .catch(handleError(dispatch));
};