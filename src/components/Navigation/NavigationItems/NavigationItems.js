import React from 'react'
import classes from './NavigationItems.css';
import NavigationSingleItem from './NavigationSingleItem/NavigationSingleItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationSingleItem link = "/">Home</NavigationSingleItem>
        <NavigationSingleItem link = "/checkout" >Checkout</NavigationSingleItem>
        
    </ul>
);

export default navigationItems;