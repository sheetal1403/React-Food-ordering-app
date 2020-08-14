import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    ordered: false,
    error: false
}

const reducer = (state=initialState, action) => {
    
    switch(action.type){
        case actionTypes.POST_ORDER:
            const newOrder = {
                ...action.orderDetails,
                id: action.orderId
            }
            return{
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
                ordered: true
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
        case actionTypes.ORDER_INIT:
            return{
                ...state,
                ordered: false
            }
        case actionTypes.FETCH_ORDERS_INIT:
            return{
                ...state,
                loading: true
            }
        
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                orders: action.orders,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAILED:
            return{
                ...state,
                error: true
            }
        default:
            return state
    }
    
}

export default reducer;