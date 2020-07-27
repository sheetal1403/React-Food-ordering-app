import React from 'react';
import BurgerAddOns from '../Burger/BurgerAddOns/BurgerAddOns';
import classes from './Burger.css';

const burger = (props) => {
    
    return(
        <div className={classes.Burger}>
            <BurgerAddOns type="bread-top"/>
            <BurgerAddOns type="salad"/>
            <BurgerAddOns type="meat"/>
            <BurgerAddOns type="bread-bottom"/>
        </div>
        
    );
}

export default burger;