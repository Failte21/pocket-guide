import {Dispatch} from "redux";
import axios from "axios";
import {handleError} from "./errors";

export const UPDATE_SM_IMG = "UPDATE_SM_IMG";
// const UPDATE_LG_IMG = "UPDATE_LG_IMG";

export enum Roles {
    SM = 14,
    LG = 15,
}

// export const updateLgImg = (poiId: number) => (dispatch: Dispatch) => {
//   axios.get(`/api/pois/${poiId}/image?role=${Roles.LG}`)
//       .then(({data}) => {
//           dispatch({type: UPDATE_LG_IMG, payload: {poiId, data}});
//       })
//       .catch(handleError(dispatch));
// };

export const updateSmImg = (poiId: number) => (dispatch: Dispatch) => {
    axios.get(`/api/pois/${poiId}/image?role=${Roles.SM}`)
        .then(({data}) => {
            dispatch({type: UPDATE_SM_IMG, payload: {poiId, data}});
        })
        .catch(handleError(dispatch));
};