import './App.css';
import React, { useState } from 'react';
import AddProduct from './components/Product/AddProduct';
import ProductList from './components/Product/ProductList';

function App() {
  const [productList, setProductList] = useState([]);
  const [totalWorth, setTotalWorth] = useState(0);

  function addProduct(newProd) {
    localStorage.setItem(newProd.id, JSON.stringify(newProd));
    setProductList(prevState => {
      return [...prevState, newProd];
    })
    setTotalWorth(prevState => {
      return +prevState+Number(newProd.price);
    })
  }

  function deleteProductHandler(product) {
    localStorage.removeItem(product.id);
    setProductList(prevState => {
      return prevState.filter(prod => prod.id !== product.id);
    })
    setTotalWorth(prevState => {
      return prevState-Number(product.price);
    })
  }

  return (
    <React.Fragment>
      <AddProduct onAddProduct={addProduct} />
      <ProductList productList={productList} deleteProduct={deleteProductHandler} />
      <div>Total Value Worth of Products: {totalWorth}</div>
    </React.Fragment>
  );
}

export default App;