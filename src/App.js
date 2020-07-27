import React from 'react';
import Layout from '../src/components/Layout/Layout';
import FoodBuilder from '../src/containers/FoodBuilder/FoodBuilder';

function App() {
  return (
    <div>
      <Layout>
        <FoodBuilder/>
      </Layout>
    </div>
  );
}

export default App;
