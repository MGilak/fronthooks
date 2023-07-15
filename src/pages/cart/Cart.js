import React from "react";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import { useCart, useCartActions } from "./../../context/CartProvider";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <Header />
      <h1>
        {cart.map((item) => (
          <h1>{item.name}</h1>
        ))}
      </h1>
      <Footer />
    </div>
  );
};

export default Cart;
