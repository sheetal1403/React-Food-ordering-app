import React, { Component } from 'react'
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import Aux from '../../hoc/Auxillary/Auxillary';
import { Route, Redirect } from 'react-router-dom';
import * as orderActionCreators from '../../store/actions/index';

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

    //WillMount method is too late. render method will be executed with old props
    // componentWillMount(){
    //     this.props.onOrderInit()
    //     console.log(this.props.ordered);
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
            const orderCompleteRedirect = this.props.ordered ? <Redirect to="/"/> : null;
            burgerFinal = 
            <Aux>
                {orderCompleteRedirect}
                <CheckoutSummary 
                    addOns={this.props.addOns}
                    continueCheckout={this.continueCheckoutHandler}
                    cancelCheckout={this.cancelCheckoutHandler}></CheckoutSummary>

                <Route 
                    path={this.props.match.path + '/contact'} 
                    // render={(props) => (<ContactData addOns={this.props.addOns} price={this.props.price} { ...props }/>)}
                    component = {ContactData}/>
            </Aux>
            
        }

        return burgerFinal;
    }
};

const mapStateToProps = state => {
    return{
        addOns: state.foodBuilder.burgerAddOns,
        price: state.foodBuilder.price,
        ordered: state.order.ordered
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onOrderInit: () => dispatch(orderActionCreators.orderInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
