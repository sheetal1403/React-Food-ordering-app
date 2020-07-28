import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxillary/Auxillary';

class FoodBuilder extends Component{

    state = {
        burgerAddOns : {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        }
    }

    render(){
        return(
            <Aux>
                <Burger addOns = {this.state.burgerAddOns}></Burger>
                <BuildControls ingredients={this.state.burgerAddOns}></BuildControls>
            </Aux>
        );
    }
};

export default FoodBuilder;
