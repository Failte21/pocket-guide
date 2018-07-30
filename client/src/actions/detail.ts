import axios from 'axios';
import {handleError} from "./errors";
import {Dispatch} from "redux";

export const UPDATE_DETAIL = "UPDATE_DETAIL";

export const updateDetail = (poiId: number) => (dispatch: Dispatch) => {
    axios.get(`/api/pois/${poiId}`)
        .then(({data}) => {
            console.log(data);
            dispatch({type: UPDATE_DETAIL, payload: data})
        })
        .catch(handleError)
};