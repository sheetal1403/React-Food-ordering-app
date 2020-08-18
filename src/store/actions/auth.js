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
            localStorage.setItem('localId', response.data.localId);
            dispatch(authSuccess(response.data));
            // dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(error => {
            dispatch(authFailed(error.response.data.error.message));
        })
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('localId');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expiresIn * 1000)
    }
   
}

export const checkIfAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(authLogout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(new Date() > expirationDate){
                //logout
                dispatch(authLogout())
            }else{
                //dont logout
                const localId = localStorage.getItem('localId');
                dispatch(authSuccess({
                    token,
                    localId
                }));
                const newExpiryTime = (expirationDate.getTime() - new Date().getTime())/1000
                dispatch(checkAuthTimeout(newExpiryTime));
            }
        }
    }
}

