import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
        return(
            <div className={classes.CheckoutSummary}>
                <h1>Checkout</h1>
                <div>
                    <Burger addOns={props.addOns}/>
                    
                </div>
                <Button btnType="Success" clicked>Continue</Button>
                <Button btnType="Danger" clicked>Cancel</Button>

                
                
               
                
                
            </div>
        );
};

export default checkoutSummary;