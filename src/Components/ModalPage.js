import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from './Modal';

function ModalPage() {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const detail = products.find((item) => item.id.toString() === id.toString());

  return (
    <main data-testid="statement-detail-page">
      <Modal detail={detail} />
      ;
    </main>
  );
}

export default ModalPage;
