import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>Toollbar, navigation</div>
            <main  className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;