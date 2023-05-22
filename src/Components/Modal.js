import React from 'react';
import '../styles/Modal.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { closeModal } from 'redux/products/productsSlice';
import { useSelector } from 'react-redux';
import Button from './Button';

function Modal(props) {
  const { modalOpen } = useSelector((store) => store.products);
  const { item } = props;
  if (!modalOpen) {
    return null;
  }
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
              <img src={item.img} alt="" className="img-fluid" />
              <h5>{item.title}</h5>
              <h5 className="text-muted">
                price :
                {item.price}
                {' '}
                cfa
              </h5>
              <NavLink to="/">
                <Button className="mainYellow" text="add to cart" onClick={() => closeModal()} />
              </NavLink>
              <NavLink to="/cart">
                <Button className="lightBlue" text="go to cart" cart onClick={() => closeModal()} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

Modal.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Modal;
