import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,

  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import ShowImage from "./showImage";
import logo from "../assets/Logo.png"




const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return "active";
  } else {
    return;
  }
};


const MaterialNav = (history) => {
  const [showBasic, setShowBasic] = useState(false);

  

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img src ={logo} alt="Logo" width="50" height="24" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto">
            <MDBNavbarItem>
              <Link className="nav-link" to="/">
                <MDBNavbarLink className={isActive(history, "/")}>
                  Home
                </MDBNavbarLink>
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link className="nav-link" to="/shop">
                <MDBNavbarLink className={isActive(history, "/shop")}>
                  Shop
                </MDBNavbarLink>
              </Link>
            </MDBNavbarItem>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <MDBNavbarItem>
                <Link className="nav-link" to="/user/dashboard">
                  <MDBNavbarLink
                    className={isActive(history, "/user/dashboard")}
                  >
                    Dashboard
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <MDBNavbarItem>
                <Link className="nav-link" to="/admin/dashboard">
                  <MDBNavbarLink
                    className={isActive(history, "/admin/dashboard")}
                  >
                    Dashboard
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            )}

           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      
        <MDBNavbarNav className="d-flex justify-content-end">
          {!isAuthenticated() && (
            <Fragment className="bg-light">
              <MDBNavbarItem>
                <Link className="nav-link" to="/signin">
                  <MDBNavbarLink className={isActive(history, "/signin")}>
                    Sign in
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <Link className="nav-link" to="/signup">
                  <MDBNavbarLink className={isActive(history, "/signup")}>
                    Sign up
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </Fragment>
          )}

          {isAuthenticated() && (
            <MDBNavbarItem
              className="mt-2"
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              <Link>
                <MDBNavbarLink>Signout</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
          )}

          <MDBNavbarItem>
            <Link className="nav-link" to="/cart">
              <MDBNavbarLink className={isActive(history, "/cart")}>
                Cart{" "}
                <sup>
                  <small className="cart-badge">{itemTotal()}</small>
                </sup>
              </MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
        </MDBNavbarNav>
      
    </MDBNavbar>
  );
};

const Menu = ({ history }) => {
  return MaterialNav(history);
};



export default withRouter(Menu);
