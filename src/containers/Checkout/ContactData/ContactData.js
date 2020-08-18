import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import * as orderActionCreators from '../../../store/actions/index';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class ContactData extends Component{

    state = {
        orderForm:  {
            name: '',
            email: '',
            city: ' ',
            country: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        // this.setState({
        //     loading: true
        // });
        const order = {
            ingredients: this.props.addOns,
            totalPrice: this.props.price, //Total price should actually be calculated in server. The customer can modify this data otherwise
            customerData: this.state.orderForm,
            userId: this.props.userId
            
        };
        this.props.onOrderSubmitted(order, this.props.token);
    
    }

    inputChangedHandler = (event) => {
        const orderFormCopy = { ...this.state.orderForm };
        orderFormCopy[event.target.name] = event.target.value;
        this.setState({
            orderForm: orderFormCopy
        });
    }

    render(){
        let form = (
            <form onSubmit={this.orderHandler}>
                <Input inputtype='input' type="text" name="name" placeholder="Enter your name" required onChange={this.inputChangedHandler}/>
                <Input inputtype='input' type="email" name="email" placeholder="Enter your email" required onChange={this.inputChangedHandler}/>
                <Input inputtype='input' type="text" name="city" placeholder="Enter your city" required onChange={this.inputChangedHandler}/>
                <Input inputtype='input' type="text" name="country" placeholder="Enter your country" required onChange={this.inputChangedHandler}/>
                
                {/* <input type="text" name="country" placeholder="Enter your country"/> */}
                <Button btnType="Success">Order</Button>
            </form>
        );

        if(this.props.loading){
            form = <Spinner/>;
        }
        return(
            
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        addOns: state.foodBuilder.burgerAddOns,
        price: state.foodBuilder.price,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
       
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onOrderSubmitted: (orderDetails, token) => dispatch(orderActionCreators.orderSubmitted(orderDetails, token)),
        onOrderInit: () => dispatch(orderActionCreators.orderInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));