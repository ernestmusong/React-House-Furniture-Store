import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { addToCart, openModal } from 'redux/products/productsSlice';
import Button from './Button';

function Details({ detail }) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{detail.title}</h1>
        </div>
      </div>
      {/* end of title */}
      {/* info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={detail.img} alt="" className="img-fluid" />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>
            model:
            {detail.title}
          </h2>
          <h4 className="title-text text-uppercase text-muted mt-3 mb-2">
            made by:
            {' '}
            <span className="text-uppercase">
              {' '}
              {detail.company}
              {' '}
            </span>
          </h4>
          <h4 className="text-blue">
            <strong className="text-uppercase">
              price:
              {' '}
              {detail.price}
              {' '}
              <span>cfa</span>
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some text
          </p>
          <p className="text-muted lead">{detail.info}</p>

          {/* buttons */}
          <div>
            <NavLink to="/">
              <Button>back to products</Button>
            </NavLink>
            <Button
              cart
              disabled={!!detail.inCart}
              onClick={() => {
                addToCart(detail.id);
                openModal(detail.id);
              }}
            >
              {detail.inCart ? 'inCart' : 'add to cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Details;
