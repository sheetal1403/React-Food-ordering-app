import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../src/components/Layout/Layout';
import FoodBuilder from '../src/containers/FoodBuilder/FoodBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
// import Orders from '../src/components/Order/Orders/Orders';
import Auth from '../src/containers/Auth/Auth';
import Logout from '../src/containers/Auth/Logout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncOrders = asyncComponent(() => {
  return import('../src/components/Order/Orders/Orders');
})

class App extends Component{

  componentDidMount(){
    this.props.onCheckAuth();
  }

  render(){

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/" component={FoodBuilder}/>
        <Redirect to="/"/>
      </Switch>
      );

    if(this.props.isAuth){
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={AsyncOrders}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" component={FoodBuilder}/>
          <Redirect to="/"/>
        </Switch>
        
      )
    }

    return (
      <BrowserRouter>
        <div>
          <Layout>
            {/* <FoodBuilder/>
            <Checkout/> */}
            {routes}
          </Layout>
        </div>
      </BrowserRouter>
      
    );
  }  
}

const mapStateToProps = state => {
  return{
    isAuth : state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onCheckAuth: () => dispatch(actions.checkIfAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
