import React from 'react'
import classes from './NavigationItems.css';
import NavigationSingleItem from './NavigationSingleItem/NavigationSingleItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationSingleItem link = "/" exact={true}>Home</NavigationSingleItem>
        <NavigationSingleItem link = "/orders" >My orders</NavigationSingleItem>
        {props.isAuth 
            ? <NavigationSingleItem link= "/logout">Log out</NavigationSingleItem> 
            : <NavigationSingleItem link = "/auth">Log in</NavigationSingleItem>}    
    </ul>
);

export default navigationItems;