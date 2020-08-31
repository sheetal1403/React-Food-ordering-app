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
            <h3>Price : {props.price} &#8377;</h3>
            {controls}
            <button 
                className={classes.OrderButton}
                disabled={!props.canBeBought}
                onClick={props.ordered}>{props.isAuth ? 'Order now!' : 'Login to order'}</button>
        </div>
    );

};



export default buildControls;