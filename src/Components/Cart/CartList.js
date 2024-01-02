import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function CartList() {
  const { products } = useSelector((store) => store.products);
  const cartItems = products.filter((item) => item.fields.inCart === true);
  return (
    <div className="container-fluid">
      {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
}
