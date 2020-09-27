import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container bg-red">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="title-text">subtotal :</span>
              <strong> {cartSubTotal} cfa</strong>
            </h5>
            <h5>
              <span className="title-text">tax :</span>
              <strong> {cartTax} cfa</strong>
            </h5>
            <h5>
              <span className="title-text">total :</span>
              <strong> {cartTotal} cfa</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
