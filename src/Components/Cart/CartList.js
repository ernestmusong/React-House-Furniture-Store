import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function CartList() {
  const { cartItems } = useSelector((store) => store.cartItems);

  return (
    <div className="container-fluid">
      {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
}
