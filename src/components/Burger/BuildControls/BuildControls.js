import React from 'react';
import BuildSingleControl from '../BuildControls/BuildSingleControl/BuildSingleControl';
import classes from './BuildControls.css';

const buildControls = (props) => {

    const controls = Object.keys(props.ingredients).map((ingredKey) => {
        const disabled = props.ingredients[ingredKey] <= 0 ? true : false;
        return <BuildSingleControl 
                    key={ingredKey} 
                    label={ingredKey}
                    addIngredient={props.addIngredient}
                    removeIngredient={props.removeIngredient}
                    disabled={disabled}></BuildSingleControl>
    })


    return (
        
        <div className={classes.BuildControls}>
            <p>Price : <strong>{props.price}</strong></p>
            {controls}
            <button 
                className={classes.OrderButton}
                disabled={!props.canBeBought}>Order now!</button>
        </div>
    );

};

export default buildControls;