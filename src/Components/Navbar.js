import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import styled from "styled-components";
// import Cart from "./Cart/Cart";
import { ProductConsumer } from "../context";

// import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
 
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <div className="cart-wrapper">
            <span className="cart-icon">
              <i className="fas fa-cart-plus" />
            </span>
            <ProductConsumer>
                {(value) => {
                  const allProducts =  value.cart.map((item) => {
                   return item.count;
                  });
                  const allProductsCount = allProducts.reduce((sum, item) => {
                    return sum + item;
                  }, 0)
                return <span className="total-items">{allProductsCount}</span> 
                }}
              </ProductConsumer>
           
          </div>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem !important;
    text-transform: capitalize;
  }
`;
