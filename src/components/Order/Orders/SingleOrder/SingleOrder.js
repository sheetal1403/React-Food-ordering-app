import React from 'react';
import classes from './SingleOrder.css'

const singleOrder = (props) => {
    const ingredients = Object.keys(props.ingredients).map(igKey => {
        return <span key={igKey}>{igKey} - {props.ingredients[igKey]  }</span>
    })
    return (
        <div className={classes.SingleOrder}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: {props.price}</p>
        </div>
    );
    
};

export default singleOrder;