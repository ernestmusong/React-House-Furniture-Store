import React from 'react';
import '../styles/Modal.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Modal({ detail }) {
  return (
    <>
      <div className="modalContainer">
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5 "
            >
              <h5>item added to the cart</h5>
              <img src={detail.fields.image[0].url} alt="" className="img-fluid" />
              <h5>{detail.fields.name}</h5>
              <h5 className="text-muted">
                price :
                {detail.fields.price}
                {' '}
                cfa
              </h5>
              <NavLink to="/">
                <button className="button lightBlue" type="button">back to products</button>
              </NavLink>
              <NavLink to="/cart">
                <button className="button mainYellow" type="button">go to cart</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

Modal.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Modal;
