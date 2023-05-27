import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/Product.css';
import PropTypes from 'prop-types';
import { addToCart } from 'redux/products/productsSlice';

function Product(props) {
  const dispatch = useDispatch();
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <article className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container">
          <NavLink to={`/detail/${item.id}`}>
            <img src={item.fields.image[0].url} height="200" width="150" alt="" className="card-img-top img-responsive" />
          </NavLink>
          <button
            type="button"
            className="cart-btn"
            disabled={!!item.fields.inCart}
            onClick={() => {
              dispatch(addToCart(item.id));
            }}
          >
            {item.fields.inCart === true ? (
              <p className="text-capitalize mb-0">

                in cart
              </p>
            ) : (
              <p className="text-capitalize mb-0">

                add to cart
              </p>
            // <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        {/* card footer */}
        <div className=" card-footer d-flex justify-content-between">
          <p className="align-self-center text-capitalize mb-0">{item.fields.name}</p>
          <h5 className="text-blue font-italic mb-0">
            {item.fields.price}
            {' '}
            <span className="mr-1">cfa</span>
          </h5>
        </div>
      </div>
    </article>
  );
}

Product.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Product;
