import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/Product.css';
import PropTypes from 'prop-types';
import { addToCart } from 'redux/products/productsSlice';

function Product(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <article className="mx-auto col-md-6 col-lg-3 mt-3">
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
              navigate(`/modal/${item.id}`);
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
            )}
          </button>
          <button
            type="button"
            className={item.fields.inCart === true ? 'showBtn' : 'hideBtn'}
            onClick={() => {
              navigate('/cart');
            }}
          >
            <p className="text-capitalize mb-0">go to cart</p>
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
