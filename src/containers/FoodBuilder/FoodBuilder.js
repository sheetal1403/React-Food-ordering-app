import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillary/Auxillary';

class FoodBuilder extends Component{

    state = {
        burgerAddOns : {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    }

    render(){
        return(
            <Aux>
                <Burger addOns = {this.state.burgerAddOns}></Burger>
                <div>Food control</div>
            </Aux>
        );
    }
};

export default FoodBuilder;
