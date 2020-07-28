import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
        totalPrice: 50,
        canBeBought: false,
        orderClicked: false
    }

    updateCanBeBought(ingreds){

        const sum = Object.keys(ingreds).map((ingredKey) => {
            return ingreds[ingredKey]
        })
       
        .reduce((sum, el) => sum + el);
        if(sum > 0){
            this.setState({canBeBought: true})
        }
        // console.log(this.state.canBeBought)
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

        this.updateCanBeBought(ingreds);
        

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

        this.updateCanBeBought(ingreds);
    }

    purchaseHandler = () => {
        console.log(this);
        this.setState({orderClicked: true})
    }

    closeModal = () => {
        this.setState({orderClicked: false})
    }

    //This is an arrow function. setState is undefined
    // purchaseHandler(){
    //     console.log(this);
    //     // this.setState({orderClicked: true})
    // }


    render(){ 
        return(
            
            <Aux>
                <Modal showModal={this.state.orderClicked} closeModal={this.closeModal}> 
                    <OrderSummary 
                        ingredients={this.state.burgerAddOns}
                        totalPrice={this.state.totalPrice}
                        closeModal={this.closeModal}
                        checkout={this.checkout}/>
                </Modal>
                <Burger addOns = {this.state.burgerAddOns}></Burger>

                <BuildControls 
                    ingredients={this.state.burgerAddOns} 
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    canBeBought={this.state.canBeBought}
                    ordered={this.purchaseHandler}></BuildControls>
            </Aux>
        );
    }
};

export default FoodBuilder;
