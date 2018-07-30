import axios from 'axios';
import {handleError} from "./errors";
import {Dispatch} from "redux";
import {Roles} from "./poi";

export const UPDATE_DETAIL = "UPDATE_DETAIL";
export const UPDATE_DETAIL_IMG = "UPDATE_DETAIL_IMG";

export const updateDetail = (poiId: number) => (dispatch: Dispatch) => {
    axios.get(`/api/pois/${poiId}`)
        .then(({data}) => {
            dispatch({type: UPDATE_DETAIL, payload: data})
            axios.get(`/api/pois/${poiId}/image?role=${Roles.LG}`)
                .then(({data}) => {
                    dispatch({type: UPDATE_DETAIL_IMG, payload: data});
                })
                .catch(handleError(dispatch))
        })
        .catch(handleError)
};