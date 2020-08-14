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
    console.log('order start')
    return{
        type: actionTypes.ORDER_START
    }
}

export const orderSubmitted = (orderDetails) => {
    return dispatch => {
        dispatch(orderStart());
        axios.post('/orders.json', orderDetails)
            .then(response => {
                console.log(response.data);
                dispatch(postOrder(response.data.name, orderDetails));
                })
                
            .catch(error => {
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
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
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

export const fetchOrders = () => {
    
    return dispatch => {
        // dispatch(fetchOrdersInit());
        axios.get('/orders.json')
            .then(response => {
                dispatch(fetchOrdersSuccessful(response.data));
            })
            .catch(e => {
                dispatch(fetchOrdersFailed());
            });
    }
}