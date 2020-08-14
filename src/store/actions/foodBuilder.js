import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (addOnType) => {
    return{
        type: actionTypes.ADD_ADDON,
        addOnType
    }
}

export const removeIngredient = (addOnType) => {
    return{
        type: actionTypes.REMOVE_ADDON,
        addOnType
    }
}

export const setIngredients = (ingredients) => {
    return{
        type: actionTypes.SET_ADDONS,
        addOns: ingredients
    }
}

export const fetchAddOnsFailed = () => {
    return{
        type: actionTypes.FETCH_ADDONS_FAILED,
        error: true
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/burgerAddOns.json')
        .then(response => {
            console.log('ADDONS:', response.data);
            dispatch(setIngredients(response.data))
        }).catch(e => {
            dispatch(fetchAddOnsFailed())
        });
    }
}