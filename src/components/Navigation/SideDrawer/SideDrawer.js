import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import Aux from '../../..//hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {

    const toggleClass = props.showSideDrawer ? classes.Open : classes.Close;
    const classesList = [classes.SideDrawer, toggleClass].join(' ');
    console.log(classesList);

    return(
        <Aux>
            <Backdrop show={props.showSideDrawer} clicked={props.close}/>
            <div className={classesList}>
                <div className={classes.Logo}>
                    <Logo/>
                    <span onClick={props.close}>Close</span>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
        
    );
}

export default sideDrawer;