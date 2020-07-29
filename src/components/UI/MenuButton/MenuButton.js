import React from 'react';
import classes from './MenuButton.css'

const menuButton = (props) => (
    <div onClick={props.clicked} className={classes.Menu}><i className="fa fa-bars" aria-hidden="true"></i></div>
);

export default menuButton;