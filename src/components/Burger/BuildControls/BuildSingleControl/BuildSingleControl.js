import React from 'react';
import classes from './BuildSingleControl.css';

const buildSingleControl =(props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            disabled={props.disabled} 
            className={classes.Less}
            onClick={() => props.removeIngredient(props.label)}>Less</button>
        <button 
            className={classes.More}
            onClick={() => props.addIngredient(props.label)}>More</button>
    </div>
);

export default buildSingleControl;