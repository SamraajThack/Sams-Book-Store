import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //destructure user and info from localStorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError('');
    setName(e.target.value)
  }

  const clickSubmit = (e) => {

      e.preventDefault()
      setError('')
      setSuccess(false)
      // make request to api to create category
      createCategory(user._id, token, {name})
      .then(data =>{
          if(data.error){
              setError(true)
          } else {
              setError("");
              setSuccess(true);
          }
      })
}

  const newCategoryForm = () => {
    return (
      <from >
        <div className="form-group">
          <label htmlFor="" className="text-muted">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            autoFocus
            required
          />
        </div>
        <button onClick ={clickSubmit} className="btn btn-outline-primary mt-2">Create Category</button>
      </from>
    );
  };

  const showSuccess = () => {
    if(success){
      return <h3 className = 'text-success'>{name} is created</h3>
    }
  }

  const showError = () => {
    if(error){
      return <h3 className = 'text-danger'>Category name should be unique</h3>
    }
  }

  const goBack = () => {
    return(
   <div className = "mt-5">
     <Link to="/admin/dashboard" className="text-warning">
       Back to Dashboard
     </Link>
      </div>
    )
  }

  return (
    <Layout
    title="Create category"
    description = "Please add a new category"
  >
    <div className="row">
      <div className="col-md-8 offset-md-2">
         {showSuccess()}
         {showError()}
        {newCategoryForm()}
        {goBack()}
        </div>
    </div>
 
  </Layout>
  )
};

export default AddCategory;
