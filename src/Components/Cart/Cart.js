import React, { Component } from "react";
import CartColumns from "./CartColumns";
import Title from "../Title";
import Empty from "./Empty";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </div>
              );
            } else {
              return <Empty />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
