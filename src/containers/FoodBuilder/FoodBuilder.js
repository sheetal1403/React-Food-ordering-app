import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxillary/Auxillary';

const ADDONS_PRICES = {
    salad: 20,
    meat: 70,
    bacon: 80,
    cheese: 30
}

class FoodBuilder extends Component{

    state = {
        burgerAddOns : {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 50
    }

    addIngredientHandler = (type) => {
        const ingreds = {...this.state.burgerAddOns};
        ingreds[type]++;
        const oldPrice = this.state.totalPrice;
        const updatedTotalPrice = oldPrice + ADDONS_PRICES[type];
        this.setState({
            burgerAddOns: ingreds,
            totalPrice: updatedTotalPrice
        })
    }

    removeIngredientHandler = (type) => {
        
        const ingreds = {...this.state.burgerAddOns};
        if(ingreds[type] <= 0){
            return;
        }
        ingreds[type]--;
        const oldPrice = this.state.totalPrice;
        const updatedTotalPrice = oldPrice - ADDONS_PRICES[type];
        this.setState({
            burgerAddOns: ingreds,
            totalPrice: updatedTotalPrice
        })
    }



    

    render(){ 
        return(
            <Aux>
                <Burger addOns = {this.state.burgerAddOns}></Burger>
                <BuildControls 
                    ingredients={this.state.burgerAddOns} 
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}></BuildControls>
            </Aux>
        );
    }
};

export default FoodBuilder;
