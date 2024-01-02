import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './Product';
import Title from './Title';
import Modal from './Modal';

function ModalPage() {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const detail = products.find((item) => item.id.toString() === id.toString());

  return (
    <main data-testid="statement-detail-page">
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((product) => <Product key={product.id} item={product} />)}
          </div>
        </div>
      </div>
      <Modal detail={detail} />
      ;
    </main>
  );
}

export default ModalPage;
