import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/* <Logo height="60%"></Logo> ---> One way, pass the height dynamically*/}
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div onClick={props.open} className={classes.Menu}>MENU</div>
        <div className={classes.Nav}>
            <NavigationItems></NavigationItems>
        </div>
        
    </header>
);
export default toolbar;