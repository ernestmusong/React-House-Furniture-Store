import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, price, inCart, title, img } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {""}
                      in cart
                    </p>
                  ) : (
                    <p className="text-capitalize mb-0">
                    {""}
                    add to cart
                  </p>
                    // <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/*card footer*/}
          <div className=" card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              {price} <span className="mr-1">cfa</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.4rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
