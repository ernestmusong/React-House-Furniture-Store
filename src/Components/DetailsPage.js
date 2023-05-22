import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Details from './Details';

function DetailsPage() {
  const { id } = useParams();
  const { newProducts } = useSelector((store) => store.products);
  const detail = newProducts.find((item) => item.id === id);

  return (
    <main data-testid="statement-detail-page">
      <Details detail={detail} />
      ;
    </main>
  );
}

export default DetailsPage;
