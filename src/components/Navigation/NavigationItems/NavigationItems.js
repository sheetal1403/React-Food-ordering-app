import React from 'react'
import classes from './NavigationItems.css';
import NavigationSingleItem from './NavigationSingleItem/NavigationSingleItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationSingleItem link = "/" active>Home</NavigationSingleItem>
        <NavigationSingleItem link = "/" >Checkout</NavigationSingleItem>
        
    </ul>
);

export default navigationItems;