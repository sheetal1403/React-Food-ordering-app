import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false
}

const reducer = (state=initialState, action) => {
    
    switch(action.type){
        case actionTypes.POST_ORDER:
            const newOrder = {
                ...action.orderDetails,
                id: action.orderId,
            }
            return{
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.ORDER_FAILED:
            return{
                ...state,
                loading: false
            }
        case actionTypes.ORDER_START:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
    
}

export default reducer;