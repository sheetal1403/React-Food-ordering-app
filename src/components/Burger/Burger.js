import React from 'react';
import BurgerAddOns from '../Burger/BurgerAddOns/BurgerAddOns';
import classes from './Burger.css';

const burger = (props) => {
    
    const transformedAddOns = Object.keys(props.addOns).map((addOnKey) => {
        return [...Array(props.addOns[addOnKey])].map((_,i) => {
             return <BurgerAddOns key={addOnKey + i} type={addOnKey}/>
        })    
    })
    

    console.log(transformedAddOns);

    return(
        <div className={classes.Burger}>
            <BurgerAddOns type="bread-top"/>
            {transformedAddOns}
            <BurgerAddOns type="bread-bottom"/>
        </div>
        
    );
}

export default burger;