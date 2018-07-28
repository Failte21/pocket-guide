import {Dispatch} from "redux";

const ERROR = 'ERROR';

export const handleError = (dispatch: Dispatch)  => (error: Error) => {
    dispatch({type: ERROR, payload: error.message})
};