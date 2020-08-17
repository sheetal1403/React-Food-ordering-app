import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import { API_KEY } from '../../environment';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData
    }
}

export const authFailed = (error) => {
    return{
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

export const auth = (email, password, signUp) => {
    return dispatch => {
        dispatch(authStart());
        //ASynchronously authenticate data
        const authData = {
            email, password
        }

        var url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
        if(!signUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;
        }

        console.log(url);
        axios.post(url, authData)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data));
        })
        .catch(error => {
            console.log(error.message);
            dispatch(authFailed(error));
        })
    }
}

