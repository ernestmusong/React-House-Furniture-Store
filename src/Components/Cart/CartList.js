import React from 'react';
// import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function CartList() {
  // const { products } = useSelector((store) => store.products);
  // const filtered = products.filter((item) => item.fields.inCart === true);
  // localStorage.setItem('cartItems', JSON.stringify(filtered));
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  return (
    <div className="container-fluid">
      {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
}
