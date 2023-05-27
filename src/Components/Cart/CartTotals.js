import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from 'redux/products/productsSlice';

function CartTotals() {
  const dispatch = useDispatch();
  const {
    cartSubTotal,
    cartTax,
    cartTotal,
  } = useSelector((store) => store.products);
  return (
    <>
      <div className="container bg-red">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              clear cart
            </button>
            <h5>
              <span className="title-text">subtotal :</span>
              <strong>
                {' '}
                {cartSubTotal}
                {' '}
                cfa
              </strong>
            </h5>
            <h5>
              <span className="title-text">tax :</span>
              <strong>
                {' '}
                {cartTax}
                {' '}
                cfa
              </strong>
            </h5>
            <h5>
              <span className="title-text">total :</span>
              <strong>
                {' '}
                {cartTotal}
                {' '}
                cfa
              </strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
