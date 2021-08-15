import React from "react";
import { API } from "../config";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";


const ShowImage = ({ item, url }) => (
  <div className="product-img d-flex justify-content-center">
    <MDBCardImage
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="mb-3"
      style={{ maxHeight: "400px", maxWidth: "auto" }}
      position = "top"
    />
  </div>
);


export default ShowImage;