import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 90;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const authLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          کسب وکار من
        </Link>
      </li>
    </ul>
  );

  const guestLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item-dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          data-target="#navToggleCommercial"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          to="/"
        >
          فروشگاه
        </Link>
        <div className="dropdown-menu">
          <Link className="dropdown-item">ثبت نام</Link>
          <Link className="dropdown-item">ورود</Link>
        </div>
      </li>

      <li className="nav-item-dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          data-target="#navToggleCommercial"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          to="/"
        >
          منتقد
        </Link>
        <div className="dropdown-menu">
          <Link className="dropdown-item">ثبت نام</Link>
          <Link className="dropdown-item">ورود</Link>
        </div>
      </li>
    </ul>
  );

  return (
    <Fragment>
      {scroll === true ? (
        <nav className="navbar navbar-expand-sm navbar-light bg-transparent fixed-top ">
          <div className="container">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h4>
              <Link className="navbar-brand" to="/">
                اپ ریکو
              </Link>
            </h4>
            <div className="collapse navbar-collapse" id="navbarNav">
              {<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-sm navbar-dark navbar-color fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h4>
              <Link className="navbar-brand" to="/">
                اپ ریکو
              </Link>
            </h4>
            <div className="collapse navbar-collapse" id="navbarNav">
              {<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>}
            </div>
          </div>
        </nav>
      )}
    </Fragment>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
