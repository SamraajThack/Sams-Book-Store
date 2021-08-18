import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./showImage";
import moment from "moment";
import { additem, addItem, updateItem, removeItem } from "./cartHelpers";
import { update } from "lodash";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [success, setSuccess] = useState(false);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`}>
          <button className="btn btn-primary mt-2 mb-2 me-2">
            View Product
          </button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setSuccess(true));
    refreshPage()

    
  };

  // const shouldRedirect = (redirect) => {
  //   if (redirect) {
  //     return <Redirect to="/cart" />;
  //   }
  // };

  const showAddToCart = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className="btn btn-warning mt-2 mb-2"
        >
          Add to cart
        </button>
      )
    );
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  const handleChange = (productId) => (e) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(e.target.value < 1 ? 1 : e.target.value);
    if (e.target.value >= 1) {
      updateItem(productId, e.target.value);
    }
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge bg-success rounded-pill">In Stock</span>
    ) : (
      <span className="badge bg-danger rounded-pill"> Out of Stock</span>
    );
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  const showSuccess = (success) => {
    if(success){
      return( 
    <div
      className="alert alert-info"
      // style={{ display: success ? "" : "none" }}
    >
      Your item was added to cart
    </div>
      )}
  }


 

  const materialCard = () => {
    return (
      <MDBCard
        className="  mb-3 ms-2" 
        style={{
          background: "#ECEFF1",
          // width: "20rem",
           //maxHeight: "55rem",
        }}
      >
        <MDBCardHeader className= 'd-flex justify-content-center'><h4> {product.name} </h4></MDBCardHeader>
        <ShowImage item={product} url="product" />

        <MDBCardBody>
          {showSuccess(success)}
      
          <MDBCardText >
           
            <p className="">${product.price}</p>
            <p className="">
              {" "}
              Category: {product.category && product.category.name}
            </p>
            <p className="">
              Added on {moment(product.createdAt).fromNow()}
            </p>
          </MDBCardText>
          {showStock(product.quantity)}
          <br />

          {showViewButton(showViewProductButton)}

          {showAddToCart(showAddToCartButton)}
          {showRemoveButton(showRemoveProductButton)}
          {showCartUpdateOptions(cartUpdate)}
        </MDBCardBody>
      </MDBCard>
    );
  };

  return (
   
    materialCard()
  );
};

export default Card;
