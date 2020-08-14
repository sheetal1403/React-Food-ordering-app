import * as actionTypes from '../actions/actionTypes';

const ADDONS_PRICES = {
    salad: 20,
    meat: 70,
    bacon: 80,
    cheese: 30
}

const initialState = {
    burgerAddOns : null,
    price: 50,
    error: false
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_ADDON:
            return{
                ...state,
                burgerAddOns: {
                    ...state.burgerAddOns,
                    // state.addOns[action.type]+ //This is wrong
                    [action.addOnType]: state.burgerAddOns[action.addOnType] + 1
                },
                price: state.price + ADDONS_PRICES[action.addOnType]
            }
        case actionTypes.REMOVE_ADDON:
            return{
                ...state,
                burgerAddOns: {
                    ...state.burgerAddOns,
                    // state.addOns[action.type]+ //This is wrong
                    [action.addOnType]: state.burgerAddOns[action.addOnType] - 1
                },
                price: state.price - ADDONS_PRICES[action.addOnType]
            }
        case actionTypes.SET_ADDONS:
            return{
                ...state,
                burgerAddOns: action.addOns,
                error: false,
                price: initialState.price
            }
        case actionTypes.FETCH_ADDONS_FAILED:
            return{
                ...state,
                error: true
            }
        default:
            return state;
    }

}

export default reducer;