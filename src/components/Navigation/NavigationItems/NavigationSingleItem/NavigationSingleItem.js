import React from 'react';
import classes from './NavigationSingleItem.css'
import { Link } from 'react-router-dom';

const navigationSingleItem = (props) => (
   <li className={classes.NavigationSingleItem}>
       {/* <a 
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a> */}
        <Link to={props.link} className={props.active ? classes.active : null}>{props.children}</Link>
   </li>
);

export default navigationSingleItem;