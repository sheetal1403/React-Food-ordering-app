import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import Aux from '../../hoc/Auxillary/Auxillary';
import { Route } from 'react-router';

class Checkout extends Component{

    state = {
        addOns: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 0
    }

    //Here didMount works because addOns is not null. If it is set to null, use willMount or contructor to parse the query params as it will executed before the render method
    componentDidMount(){
        this.parseQueryParams();
    }

    parseQueryParams = () => {
        const query = new URLSearchParams(this.props.location.search);
        const addOns = {};
        for(let param of query.entries()){
            if(param[0] === 'price'){
                this.setState({price: param[1]})
            }else{
                addOns[param[0]] = +param[1];
            }
            
        }
        if(Object.keys(addOns).length > 0){
            this.setState({addOns: addOns})
        }
        
        
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact');
    }

    cancelCheckoutHandler =() => {
        this.props.history.goBack();
    }

    render(){
        return(
            <Aux>
                <CheckoutSummary 
                addOns={this.state.addOns}
                continueCheckout={this.continueCheckoutHandler}
                cancelCheckout={this.cancelCheckoutHandler}></CheckoutSummary>
                <Route 
                    path={this.props.match.path + '/contact'} 
                    render={(props) => (<ContactData addOns={this.state.addOns} price={this.state.price} { ...props }/>)}/>
            </Aux>
            
        );
    }
};

export default Checkout;
