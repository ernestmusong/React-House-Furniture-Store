import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="logo-container">
          <Link to="/">
            <div className="logo-wrapper">
               <img src={logo} alt="" className="navbar-brand" />
            </div>
            
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
              All products
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart" className="cart-container">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem !important;
    text-transform: capitalize;
  }
`;
