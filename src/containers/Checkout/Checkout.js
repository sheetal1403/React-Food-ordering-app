import React, { Component } from 'react'
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import Aux from '../../hoc/Auxillary/Auxillary';
import { Route, Redirect } from 'react-router-dom';

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
    // componentDidMount(){  //REDUX takes care of getting the state
    //     this.parseQueryParams();
    // }

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

        let burgerFinal = <Redirect to="/"/>
        if(this.props.addOns){
            burgerFinal = <CheckoutSummary 
            addOns={this.props.addOns}
            continueCheckout={this.continueCheckoutHandler}
            cancelCheckout={this.cancelCheckoutHandler}></CheckoutSummary>
        }

        return(
            <Aux>
                {burgerFinal}
                <Route 
                    path={this.props.match.path + '/contact'} 
                    // render={(props) => (<ContactData addOns={this.props.addOns} price={this.props.price} { ...props }/>)}
                    component = {ContactData}
                    />
            </Aux>
            
        );
    }
};

const mapStateToProps = state => {
    return{
        addOns: state.burgerAddOns,
        price: state.price
    }
}

export default connect(mapStateToProps)(Checkout);
