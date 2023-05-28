import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/products/productsSlice';
import '../styles/Button.css';

function Details({ detail }) {
  const dispatch = useDispatch();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{detail.fields.name}</h1>
        </div>
      </div>
      {/* end of title */}
      {/* info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={detail.fields.image[0].url} alt={detail.fields.name} className="img-fluid" />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>
            model:
            {detail.fields.name}
          </h2>
          <h4 className="title-text text-uppercase text-muted mt-3 mb-2">
            made by:
            {' '}
            <span className="text-uppercase">
              {' '}
              {detail.fields.company}
              {' '}
            </span>
          </h4>
          <h4 className="text-blue">
            <strong className="text-uppercase">
              price:
              {' '}
              {detail.fields.price}
              {' '}
              <span>cfa</span>
            </strong>
          </h4>
          <p className="text-muted lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco
          </p>
          {/* buttons */}
          <div>
            <NavLink to="/">
              <button className="button lightBlue" type="button">back to products</button>
            </NavLink>
            {detail.fields.inCart === false ? (
              <NavLink to={`/modal/${detail.id}`}>
                <button
                  id={detail.id}
                  className="button mainYellow"
                  type="button"
                  onClick={() => {
                    dispatch(addToCart(detail.id));
                  }}
                >
                  add to cart
                </button>
              </NavLink>

            ) : (
              <button
                className="button mainYellow"
                type="button"
                disabled={detail.fields.inCart}
              >
                in cart
              </button>
            )}

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
