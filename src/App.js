import React from 'react';
import Layout from '../src/components/Layout/Layout';
import FoodBuilder from '../src/containers/FoodBuilder/FoodBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          {/* <FoodBuilder/>
          <Checkout/> */}
          <Route path="/" exact component={FoodBuilder}/>
          <Route path="/checkout" component={Checkout}/>
        </Layout>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
