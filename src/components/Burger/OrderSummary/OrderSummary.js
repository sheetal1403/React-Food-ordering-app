import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';

const orderSummary = (props) => {

    const addOnsSummary = Object.keys(props.ingredients).map((ingredKey) => {
        return <li key={ingredKey}>{ingredKey} : {props.ingredients[ingredKey]}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>
                {addOnsSummary}
            </ul>
            
    </Aux>
    );
}
    
;

export default orderSummary;