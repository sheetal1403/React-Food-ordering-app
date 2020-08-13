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

export const orderSubmitted = (orderDetails) => {
    return dispatch => {
        orderStart();
        axios.post('/orders.json', orderDetails)
            .then(response => {
                console.log(response.data);
                dispatch(postOrder(response.data, orderDetails));
                })
                
            .catch(error => {
                dispatch(orderFailed(error))
            });
    }
    
}