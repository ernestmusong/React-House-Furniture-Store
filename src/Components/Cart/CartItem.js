import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { increase, decrease, removeItem } from 'redux/products/productsSlice';
import { useDispatch } from 'react-redux';

function CartItem(props) {
  const dispatch = useDispatch();
  const { item } = props;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={item.fields.image[0].url}
          style={{ width: '5rem', height: '5rem' }}
          className="img-fluid "
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">name :</span>
        {item.fields.name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">price :</span>
        {item.fields.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <button disabled={item.fields.count === 1} type="button" className="btn btn-black mx-1" onClick={() => dispatch(decrease(item.id))}>
              -
            </button>
            <button type="button" className="btn btn-black mx-1">{item.fields.count}</button>
            <button type="button" className="btn btn-black mx-1" onClick={() => dispatch(increase(item.id))}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <button type="button" className="deleteBtn" onClick={() => dispatch(removeItem(item.id))}>
          <FaTrash />
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2 text-capitalize">
        <strong>
          total :
          { ' ' }
          {item.fields.total}
          { ' ' }
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
