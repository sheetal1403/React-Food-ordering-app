import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../src/components/Layout/Layout';
import FoodBuilder from '../src/containers/FoodBuilder/FoodBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import Orders from '../src/components/Order/Orders/Orders';
import Auth from '../src/containers/Auth/Auth';
import Logout from '../src/containers/Auth/Logout';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from './store/actions/index';

class App extends Component{

  componentDidMount(){
    this.props.onCheckAuth();
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Layout>
            {/* <FoodBuilder/>
            <Checkout/> */}
            <Route path="/" exact component={FoodBuilder}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/logout" component={Logout}/>
          </Layout>
        </div>
      </BrowserRouter>
      
    );
  }  
}

const mapDispatchToProps = dispatch => {
  return{
    onCheckAuth: () => dispatch(actions.checkIfAuth())
  }
}

export default connect(null, mapDispatchToProps)(App);
