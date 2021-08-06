import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import { getCart } from "./cartHelpers";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />

        {items.map((p, i) => (
          <Card key={i} product={p} showAddToCartButton={false} />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => {
    return (
      <h2>
        {" "}
        Your cart is empty. <br /> <Link to="/shop"> Continue shopping</Link>
      </h2>
    );
  };

  return (
    <Layout
      title="Shopping Cart"
      description="Manage you cart items - add, remove, checkout or continue shopping "
      className="container-fluid"
    >
      <div className="row">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className="col-6">
          <h2>Show checkout options</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
