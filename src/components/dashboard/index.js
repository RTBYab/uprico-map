import Grid from "../grid/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import React, { useEffect, Fragment } from "react";
import { getPosts } from "../../redux/actions/post";
import { getStoreByStoreOwner } from "../../redux/actions/store";
import Header from "../store/storeHeader";
import Footer from "../store/storeFooter";

const Dashboard = ({
  getStoreByStoreOwner,
  auth: { user },
  store,
  getPosts
}) => {
  const id = user._id;
  useEffect(() => {
    getPosts(id);
    getStoreByStoreOwner(id);
  }, [getStoreByStoreOwner, getPosts, id]);

  return store.loading && store === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Header />
      <p className="lead">
        <i className="fas fa-user"></i> {user && user.name} خوش آمدید
      </p>

      {store.store !== null ? (
        <Grid />
      ) : (
        <Link to="/create-store" className="btn btn-danger">
          {" "}
          ساخت فروشگاه
        </Link>
      )}
      <Footer />
    </Fragment>
  );
};
Dashboard.prototype = {
  auth: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth
});

export default connect(mapStateToProps, { getStoreByStoreOwner, getPosts })(
  Dashboard
);
