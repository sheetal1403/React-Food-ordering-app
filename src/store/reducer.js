import * as actionTypes from './actions';

const initialState = {
    addOns : null,
    price: 50
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_ADDON:
            return{

            }
        case actionTypes.REMOVE_ADDON:
            return{

            }
        default:
            return state;
    }

}

export default reducer;