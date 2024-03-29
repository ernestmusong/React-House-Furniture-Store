import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from 'redux/products/productsSlice';

function CartTotals() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const selectItems = products.filter((elem) => elem.fields.inCart === true);
  const totals = selectItems.map((item) => item.fields.total);
  const subTotal = totals.reduce((a, b) => a + b);
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
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
                {subTotal}
                {' '}
                cfa
              </strong>
            </h5>
            <h5>
              <span className="title-text">tax :</span>
              <strong>
                {' '}
                {tax}
                {' '}
                cfa
              </strong>
            </h5>
            <h5>
              <span className="title-text">total :</span>
              <strong>
                {' '}
                {total}
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
