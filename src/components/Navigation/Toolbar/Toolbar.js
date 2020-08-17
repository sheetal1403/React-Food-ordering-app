import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../../UI/MenuButton/MenuButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/* <Logo height="60%"></Logo> ---> One way, pass the height dynamically*/}
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div className={classes.Menu}>
            <MenuButton clicked={props.open}/>
        </div>
        
        <div className={classes.Nav}>
            <NavigationItems isAuth={props.isAuth}></NavigationItems>
        </div>
        
    </header>
);
export default toolbar;