import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import { createProduct } from "./apiAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          quantity: "",
          photo: "",
          loading: false,
          createdProduct: data.name,

        });
      }
    });
  };

  const newPostForm = () => {
    return (
      <form className="mb-3">
        <h4>Post photo</h4>
        <div className="form-group">
          <label className="btn btn-secondary">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image/*"
            />
          </label>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            value={name}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            onChange={handleChange("description")}
            type="text"
            className="form-control"
            value={description}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
            value={price}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select onChange={handleChange("category")} className="form-control">
            <option value="6103a801e73075523409bd79">Python</option>
            <option value="6103a801e73075523409bd79">PHP</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            onChange={handleChange("quantity")}
            type="number"
            className="form-control"
            value={quantity}
          />
        </div>
        <div className="form-group">
          <label>Shipping</label>
          <select onChange={handleChange("shipping")} className="form-control">
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <button
          onClick={clickSubmit}
          className="btn btn-outline-primary mt-2"
        >
          Create Product
        </button>
      </form>
    );
  };

  return (
    <Layout title="New Product" description="Add a new product">
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
};

export default AddProduct;
