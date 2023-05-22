import React from 'react';
import PropTypes from 'prop-types';
import { increase, decrease, removeItem } from 'redux/products/productsSlice';

function CartItem(props) {
  const { item } = props;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={item.img}
          style={{ width: '5rem', height: '5rem' }}
          className="img-fluid "
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span>
        {item.title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span>
        {item.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <button type="button" className="btn btn-black mx-1" onClick={() => increase(item.id)}>
              -
            </button>
            <button type="button" className="btn btn-black mx-1">{item.count}</button>
            <button type="button" className="btn btn-black mx-1" onClick={() => decrease(item.id)}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <button type="button" className="cart-icon" onClick={() => removeItem(item.id)}>
          <i className="fas fa-trash" />
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>
          item total :
          {item.total}
          cfa
        </strong>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CartItem;
