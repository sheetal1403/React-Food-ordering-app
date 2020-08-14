import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import * as foodBuilderActionCreators from '../../store/actions/index';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../hoc/Auxillary/Auxillary';
import Spinner from '../../components/UI/Spinner/Spinner';


class FoodBuilder extends Component{

    state = {
        // burgerAddOns : null, Not used here. Redux is used
        totalPrice: 50,
        canBeBought: false,
        orderClicked: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        this.props.onInitIngredients();
        //DONE IN THE ACTION CREATORS
        // axios.get('/burgerAddOns.json')
        //     .then(response => {
        //         this.setState({burgerAddOns: response.data});
        //     }).catch(e => {
        //         this.setState({error: true})
        //     });
    }

    updateCanBeBought(ingreds){

        const sum = Object.keys(ingreds).map((ingredKey) => {
            return ingreds[ingredKey]
        })
       
        .reduce((sum, el) => sum + el);
        if(sum > 0){
            return true;
        }
        return false;
        // console.log(this.state.canBeBought)
    }

    // addIngredientHandler = (type) => {
    //     const ingreds = {...this.state.burgerAddOns};
    //     ingreds[type]++;
    //     const oldPrice = this.state.totalPrice;
    //     const updatedTotalPrice = oldPrice + ADDONS_PRICES[type];
    //     this.setState({
    //         burgerAddOns: ingreds,
    //         totalPrice: updatedTotalPrice
    //     })

    //     this.updateCanBeBought(ingreds);
        

    // }

    // removeIngredientHandler = (type) => {
        
    //     const ingreds = {...this.state.burgerAddOns};
    //     if(ingreds[type] <= 0){
    //         return;
    //     }
    //     ingreds[type]--;
    //     const oldPrice = this.state.totalPrice;
    //     const updatedTotalPrice = oldPrice - ADDONS_PRICES[type];
    //     this.setState({
    //         burgerAddOns: ingreds,
    //         totalPrice: updatedTotalPrice
    //     })

    //     this.updateCanBeBought(ingreds);
    // }

    purchaseHandler = () => {
        this.setState({orderClicked: true})
        this.props.onOrderInit();
    }

    closeModal = () => {
        this.setState({orderClicked: false})
    }

    checkoutHandler = () => {
        // this.setState({
        //     loading: true
        // });
        // const order = {
        //     ingredients: this.state.burgerAddOns,
        //     totalPrice: this.state.totalPrice, //Total price should actually be calculated in server. The customer can modify this data otherwise
        //     customer: {
        //         name: 'Sara',
        //         address: {
        //             street: 'Lincoln road',
        //             pinCode: '5699',
        //             city: 'bangalore'
        //         },
        //         email: 'example.com'
        //     } 
        // };
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({
        //             loading: false,
        //             orderClicked: false
        //         });
        //         this.props.history.push({pathname: '/checkout'});
        //         // <Redirect to="/checkout"/>
        //         // console.log(response);
        //     })
        //     .catch(error =>console.log(error) ); 

        // const queryParams = [];
        // for(let i in this.props.burgerAddOns){
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.burgerAddOns[i]));
        // };
        // queryParams.push("price="+this.props.price);
        this.props.history.push({
            pathname: '/checkout'
            // search: '?' + queryParams.join('&')
    });
}

    //This is not an arrow function. setState is undefined
    // purchaseHandler(){
    //     console.log(this);
    //     // this.setState({orderClicked: true})
    // }


    render(){ 
    
        let burger = this.props.error ? <p style={{textAlign: 'center'}}>Sorry! Loading error</p> : <Spinner/>
        let orderSummary = <Spinner/>
        
        if(this.props.burgerAddOns){
            burger = (
                <Aux>
                    <Burger addOns = {this.props.burgerAddOns}></Burger>
                    <BuildControls 
                        ingredients={this.props.burgerAddOns} 
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        price={this.props.price}
                        canBeBought={this.updateCanBeBought(this.props.burgerAddOns)}
                        ordered={this.purchaseHandler}></BuildControls>
                </Aux>
            );
            orderSummary = <OrderSummary 
                                ingredients={this.props.burgerAddOns}
                                totalPrice={this.props.price}
                                closeModal={this.closeModal}
                                checkout={this.checkoutHandler}/>;
            }

            
        if(this.state.loading){
            orderSummary = <Spinner/>
        }
        
       

        return(
            
            <Aux>
                <Modal showModal={this.state.orderClicked} closeModal={this.closeModal}> 
                    {orderSummary}
                    
                </Modal>
                {burger}
                
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return{
        burgerAddOns : state.foodBuilder.burgerAddOns,
        price: state.foodBuilder.price,
        error: state.foodBuilder.error

    }
    
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (addOnType) => dispatch(foodBuilderActionCreators.addIngredient(addOnType)),
        onIngredientRemoved: (addOnType) => dispatch(foodBuilderActionCreators.removeIngredient(addOnType)),
        onInitIngredients: () => dispatch(foodBuilderActionCreators.initIngredients()),
        onOrderInit: () => dispatch(foodBuilderActionCreators.orderInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FoodBuilder, axios));
