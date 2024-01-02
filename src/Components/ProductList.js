import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from 'redux/products/productsSlice';
import Product from './Product';
import Title from './Title';

function ProductList() {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts('EQUIPMENT'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="collections" />
          <div className="row">
            {products.map((product) => <Product key={product.id} item={product} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
