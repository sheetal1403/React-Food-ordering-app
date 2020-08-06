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

    componentDidMount(){
        this.parseQueryParams();
    }

    parseQueryParams = () => {
        const query = new URLSearchParams(this.props.location.search);
        const addOns = {};
        for(let param of query.entries()){
            addOns[param[0]] = +param[1];
        }
        this.setState({addOns: addOns})
        
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact');
    }

    cancelCheckoutHandler =() => {
        this.props.history.goBack();
    }

    render(){
        return(
            <CheckoutSummary 
                addOns={this.state.addOns}
                continueCheckout={this.continueCheckoutHandler}
                cancelCheckout={this.cancelCheckoutHandler}></CheckoutSummary>
        );
    }
};

export default Checkout;
