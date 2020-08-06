import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{

    state = {
        addOns: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    render(){
        return(
            <CheckoutSummary addOns={this.state.addOns}></CheckoutSummary>
        );
    }
};

export default Checkout;
