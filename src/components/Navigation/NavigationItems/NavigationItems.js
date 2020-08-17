import React from 'react'
import classes from './NavigationItems.css';
import NavigationSingleItem from './NavigationSingleItem/NavigationSingleItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationSingleItem link = "/" exact={true}>Home</NavigationSingleItem>
        {props.isAuth ? <NavigationSingleItem link = "/orders" >My orders</NavigationSingleItem> : null}
        {props.isAuth 
            ? <NavigationSingleItem link= "/logout">Log out</NavigationSingleItem> 
            : <NavigationSingleItem link = "/auth">Log in</NavigationSingleItem>}    
    </ul>
);

export default navigationItems;