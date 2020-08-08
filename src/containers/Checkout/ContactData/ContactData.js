import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{

    state = {
        orderForm:  {
            name: '',
            email: '',
            city: ' ',
            country: ''
        },    
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.addOns,
            totalPrice: this.props.price, //Total price should actually be calculated in server. The customer can modify this data otherwise
            customerData: this.state.orderForm
            
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error =>console.log(error) ); 
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

        if(this.state.loading){
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

export default ContactData;