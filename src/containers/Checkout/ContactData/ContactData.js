import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component{

    state = {
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
            customer: {
                name: 'Sara',
                address: {
                    street: 'Lincoln road',
                    pinCode: '5699',
                    city: 'bangalore'
                },
                email: 'example.com'
            } 
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

    render(){
        let form = (
            <form>
                <input type="text" name="name" placeholder="Enter your name"/>
                <input type="text" name="city" placeholder="Enter your city"/>
                <input type="text" name="country" placeholder="Enter your country"/>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner/>;
        }
        return(
            
            <div className={classes.ContactData}>
                {form}
            </div>
        )
    }
}

export default ContactData;