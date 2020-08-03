import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

class OrderSummary extends Component{

    componentWillUpdate(){
        // console.log('order summary update');
    }

    render(){

        const addOnsSummary = Object.keys(this.props.ingredients).map((ingredKey) => {
            return <li key={ingredKey}>{ingredKey.toUpperCase()} : {this.props.ingredients[ingredKey]}</li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <ul className={classes.List}>
                    {addOnsSummary}
                </ul>
                <p>Total price : {this.props.totalPrice}</p>
                <div className={classes.Checkout}>
                    <p>Want to checkout ?</p>
                    <Button btnType="Success" clicked={this.props.checkout}>Yes!</Button>
                    <Button btnType="Danger" clicked={this.props.closeModal}>Go back</Button>
                </div>       
        </Aux>
        );
    }

    
}
    
;

export default OrderSummary;