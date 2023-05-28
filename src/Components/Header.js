/* eslint jsx-a11y/control-has-associated-label: 0 */

import React, { useState } from 'react';
import {
  FaMicrophone,
  FaAngleLeft,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import '../styles/App.css';
import { useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products } = useSelector((store) => store.products);
  const cartItems = products.filter((item) => item.fields.inCart === true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = products.find((x) => x.fields.name.toLowerCase() === searchQuery.toLowerCase());
    if (match) {
      navigate(`/detail/${match.id}`);
      setSearchQuery(''); // Clear the form
    }
  };

  return (
    <>
      <nav className="navbar" data-testid="header-container">
        <div className="top-nav">
          <ul>
            <li className="top-nav-item"><NavLink className="nav_link" to="/">Home</NavLink></li>
            <li className="top-nav-item"><NavLink className="nav_link" to="/">About</NavLink></li>
            <li className="top-nav-item"><NavLink className="nav_link" to="/">Contact</NavLink></li>
          </ul>
          <ul>
            <li className="top-nav-social"><a href="/"><FaTwitterSquare style={{ color: '#f0f0f0', fontSize: '1.5rem' }} /></a></li>
            <li className="top-nav-social"><a href="/"><FaLinkedin style={{ color: '#f0f0f0', fontSize: '1.5rem' }} /></a></li>
            <li className="top-nav-item"><NavLink className="nav_link" to="/">English</NavLink></li>
            <li className="top-nav-item"><NavLink className="nav_link" to="/">signup</NavLink></li>
            <li className="top-nav-item"><NavLink className="nav_link" to="/">login</NavLink></li>
          </ul>
        </div>
        <div className="lower-nav">
          <div className="logo" data-testid="logo">
            <NavLink to="/" style={{ display: 'flex', textDecoration: 'none' }}>
              <div className="iconWrap">
                <FaAngleLeft />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#fff' }}>EQUIPMENT</h4>
            </NavLink>
          </div>
          <form className="search-wrapper" onSubmit={handleSubmit}>
            <label className="search-label" htmlFor="year">
              <input
                type="search"
                name="year"
                id="year"
                className="search-input"
                placeholder="Search products"
                value={searchQuery}
                onChange={handleChange}
              />
            </label>
            <button type="submit" id="search-button">
              <FaMicrophone />
            </button>
          </form>
          <NavLink to="/cart" className="cart-container">
            <div className="cart-wrapper">
              <span className="cart-icon">
                <AiOutlineShoppingCart />
              </span>

              <span className="total-items">{cartItems.length}</span>

            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
