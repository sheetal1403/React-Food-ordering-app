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
            email, 
            password,
            returnSecureToken: true
        }

        var url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
        if(!signUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;
        }
        axios.post(url, authData)
        .then(response => {
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(response.data));
        })
        .catch(error => {
            dispatch(authFailed(error.response.data.error.message));
        })
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

