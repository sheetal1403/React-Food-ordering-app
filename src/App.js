import React from 'react';
import Layout from '../src/components/Layout/Layout';
import FoodBuilder from '../src/containers/FoodBuilder/FoodBuilder';
import Checkout from '../src/containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <FoodBuilder/>
        <Checkout/>
      </Layout>
    </div>
  );
}

export default App;
