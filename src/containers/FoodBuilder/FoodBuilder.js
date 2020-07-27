import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillary/Auxillary';

class FoodBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger></Burger>
                <div>Food control</div>
            </Aux>
        );
    }
};

export default FoodBuilder;
