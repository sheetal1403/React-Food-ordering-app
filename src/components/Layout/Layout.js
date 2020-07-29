import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = (props) => {
    return (
        <Aux>
            
            <SideDrawer></SideDrawer>
            <Toolbar></Toolbar>
            <main  className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;