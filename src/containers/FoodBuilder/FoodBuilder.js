import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../hoc/Auxillary/Auxillary';
import Spinner from '../../components/UI/Spinner/Spinner';



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
        orderClicked: false,
        loading: false
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
        this.setState({orderClicked: true})
    }

    closeModal = () => {
        this.setState({orderClicked: false})
    }

    checkoutHandler = () => {
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.state.burgerAddOns,
            totalPrice: this.state.totalPrice, //Total price should actually be calculated in server. The customer can modify this data otherwise
            customer: {
                name: 'Sara',
                address: {
                    street: 'Lincoln road',
                    pinCode: '5699',
                    city: 'bangalore'
                },
                email: 'example.com'
            } 
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                    orderClicked: false
                });
                // console.log(response);
            })
            .catch(error =>console.log(error) );
    }

    //This is not an arrow function. setState is undefined
    // purchaseHandler(){
    //     console.log(this);
    //     // this.setState({orderClicked: true})
    // }


    render(){ 
        let modalContents = <OrderSummary 
        ingredients={this.state.burgerAddOns}
        totalPrice={this.state.totalPrice}
        closeModal={this.closeModal}
        checkout={this.checkoutHandler}/>;
        
        if(this.state.loading){
            modalContents = <Spinner/>
        }

        return(
            
            <Aux>
                <Modal showModal={this.state.orderClicked} closeModal={this.closeModal}> 
                    {modalContents}
                    
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

export default withErrorHandler(FoodBuilder, axios);
