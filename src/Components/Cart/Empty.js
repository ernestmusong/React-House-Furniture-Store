import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Empty() {
  return (
    <div className="container">
      <div className="row empty d-flex justify-content-center align-items-center">
        <div className="col-10 mx-auto text-center text-title">
          <h1>your cart is currently empty</h1>
          <NavLink to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
            >
              back to products
            </button>

          </NavLink>
        </div>
      </div>
    </div>
  );
}
