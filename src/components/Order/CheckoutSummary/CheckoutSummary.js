import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
        return(
            <div className={classes.CheckoutSummary}>
                <h1>We hope you enjoy your burger!</h1>
                <h3>Checkout ?</h3>
                <div style={{marginTop: '80px'}}>
                    <Burger addOns={props.addOns}/>
                    
                </div>
                <Button btnType="Success" clicked={props.continueCheckout}>Yes!</Button>
                <Button btnType="Danger" clicked={props.cancelCheckout}>Cancel</Button>

                
                
               
                
                
            </div>
        );
};

export default checkoutSummary;