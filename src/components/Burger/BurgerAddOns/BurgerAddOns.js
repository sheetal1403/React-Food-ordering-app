import React from 'react';
import classes from './BurgerAddOns.css';
import PropTypes from 'prop-types';

const burgerAddOns = (props) => {
    let addOn = null;
    switch(props.type){
        case ('bread-bottom'): 
            addOn = <div className={classes.BreadBottom}></div>;
            break;

        case ('bread-top'):
            addOn = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;

        case ('meat'):
            addOn = <div className={classes.Meat}></div>;
            break;

        case ('cheese'):
            addOn = <div className={classes.Cheese}></div>;
            break;
                
        case ('salad'):
            addOn = <div className={classes.Salad}></div>;
            break;
        
        default:
            addOn = null;    
    }
    return addOn;   
};

burgerAddOns.propTypes = {
    type: PropTypes.string.isRequired
}


export default burgerAddOns;