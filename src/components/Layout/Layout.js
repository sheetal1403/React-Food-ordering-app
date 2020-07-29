import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => {
    return (
        <Aux>
            
            <Toolbar></Toolbar>
            <main  className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;