import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import Aux from '../../..//hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';



const sideDrawer = (props) => {

    const toggleClass = props.showSideDrawer ? classes.Open : classes.Close;
    const classesList = [classes.SideDrawer, toggleClass].join(' ');

    return(
        <Aux>
            <Backdrop show={props.showSideDrawer} clicked={props.close}/>
            <div className={classesList} onClick={props.close}>
                <div className={classes.Logo}>
                    <Logo/>
                    <span onClick={props.close}><i className="fa fa-times" aria-hidden="true"></i></span>
                </div>
                <nav>
                    <NavigationItems isAuth={props.isAuth}/>
                </nav>
            </div>
        </Aux>
        
    );
}

export default sideDrawer;