import React from 'react';
import { useSelector } from 'react-redux';
import CartColumns from './CartColumns';
import Title from '../Title';
import Empty from './Empty';
import CartList from './CartList';
import CartTotals from './CartTotals';

function Cart() {
  const { cartItems } = useSelector((store) => store.products);
  if (cartItems.length === 0) {
    return <Empty />;
  }
  return (
    <section>

      <div>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList />
        <CartTotals />
      </div>

    </section>
  );
}
export default Cart;
