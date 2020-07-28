import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

const orderSummary = (props) => {

    const addOnsSummary = Object.keys(props.ingredients).map((ingredKey) => {
        return <li key={ingredKey}>{ingredKey.toUpperCase()} : {props.ingredients[ingredKey]}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <ul className={classes.List}>
                {addOnsSummary}
            </ul>
            <p>Total price : {props.totalPrice}</p>
            <div className={classes.Checkout}>
                <p>Want to checkout ?</p>
                <Button btnType="Success" clicked={props.checkout}>Yes!</Button>
                <Button btnType="Danger" clicked={props.closeModal}>Go back</Button>
            </div>
            
            
    </Aux>
    );
}
    
;

export default orderSummary;