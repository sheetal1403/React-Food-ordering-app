import * as actionTypes from './actions';

const ADDONS_PRICES = {
    salad: 20,
    meat: 70,
    bacon: 80,
    cheese: 30
}

const initialState = {
    burgerAddOns : {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    price: 50
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
        default:
            return state;
    }

}

export default reducer;