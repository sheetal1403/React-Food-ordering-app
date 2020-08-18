import axios from '../../axios-orders';
import * as actionTypes from '../actions/actionTypes';

export const postOrder = (id, orderDetails) => {
    return{
        type: actionTypes.POST_ORDER,
        orderId: id,
        orderDetails
    }
}

export const orderFailed = (error) => {
    return{
        type: actionTypes.ORDER_FAILED,
        error: error
    }
    
}

export const orderStart = () => {
    return{
        type: actionTypes.ORDER_START
    }
}

export const orderSubmitted = (orderDetails, token) => {
    return dispatch => {
        dispatch(orderStart());
        axios.post('/orders.json?auth=' + token, orderDetails)
            .then(response => {
                dispatch(postOrder(response.data.name, orderDetails));
                })
                
            .catch(error => {
                console.log(error);
                dispatch(orderFailed(error))
            });
    }
    
}

export const orderInit = () => {
    return{
        type: actionTypes.ORDER_INIT
    }
}

export const fetchOrdersSuccessful = (orders) => {
    const ordersArray = [];
    for(const key in orders){
        ordersArray.push(orders[key]);
    }
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        ordersArray
    }
}

export const fetchOrdersFailed = () => {
    return{
        type: actionTypes.FETCH_ORDERS_FAILED
    }
}

export const fetchOrdersInit = () => {
    return{
        type: actionTypes.FETCH_ORDERS_INIT
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        // dispatch(fetchOrdersInit());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(response => {
                dispatch(fetchOrdersSuccessful(response.data));
            })
            .catch(e => {
                dispatch(fetchOrdersFailed());
            });
    }
}