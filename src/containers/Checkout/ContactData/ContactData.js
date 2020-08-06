import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component{
    render(){
        return(
            <div className={classes.ContactData}>
                <form>
                    <input type="text" name="name" placeholder="Enter your name"/>
                    <input type="text" name="city" placeholder="Enter your city"/>
                    <input type="text" name="country" placeholder="Enter your country"/>
                    <Button btnType="Success" clicked>Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;