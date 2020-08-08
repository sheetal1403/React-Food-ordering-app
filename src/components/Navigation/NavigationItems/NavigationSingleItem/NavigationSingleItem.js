import React from 'react';
import classes from './NavigationSingleItem.css'
import { NavLink } from 'react-router-dom';

const navigationSingleItem = (props) => (
   <li className={classes.NavigationSingleItem}>
       {/* <a 
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a> */}
        {/* <Link to={props.link} className={props.active ? classes.active : null}>{props.children}</Link> */}
        <NavLink 
         exact={props.exact}
         to={props.link}
         activeClassName={classes.active}>{props.children}</NavLink>
   </li>
);

export default navigationSingleItem;