import React from 'react';
import classes from './NavigationSingleItem.css'

const navigationSingleItem = (props) => (
   <li className={classes.NavigationSingleItem}>
       <a 
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a>
   </li>
);

export default navigationSingleItem;