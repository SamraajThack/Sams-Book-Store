import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getSingleProduct, listRelated } from "./apiCore";
import Card from "./Card";
import ShowImage from "./showImage";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    getSingleProduct(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        //fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProducts(data);
          }
        });
      }
    });
  };

  const showProductDetails = (product) => {
    return(
      product.description && 
        <div>
          <h3>Description</h3>
        <p>{product.description}</p>
        </div>
        
      
    )
    
  }

  

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      title={product && product.name}
      description=''
      className="container-fluid"
    >

      <br/>
      <div className="row">
        

        <div className = "col-3 d-flex justify-content-center">
        {product && product.description && (
          <Card product={product} showViewProductButton={false}/>
        )}
        </div>

        <div className = 'col-5'>
        {showProductDetails(product)}
        </div>
        <div className = "col-3 ms-1">
          <h4>Related products</h4>
          {relatedProducts.map((p,i) => (
            <div key={i} className = "mb-3">
              <Card  product={p}/>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
