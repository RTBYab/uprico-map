import Grid from "../grid/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Header from "../store/storeHeader";
import Footer from "../store/storeFooter";
import React, { useEffect, Fragment } from "react";
import { getPosts } from "../../redux/actions/post";
import { getStoreByStoreOwner } from "../../redux/actions/store";

const Dashboard = ({
  getStoreByStoreOwner,
  auth: { user },
  store,
  getPosts,
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
      {store.store !== null ? (
        <Fragment>
          <Header />
          <Grid />
          <Footer />
        </Fragment>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={require("../../utils/image/store.png")}
            alt="store"
            className="rounded mx-auto d-block dashboard-image"
          />
          <Link to="/create-store" className="btn btn-dark text-center m-auto">
            {" "}
            ساخت فروشگاه
          </Link>
        </div>
      )}
    </Fragment>
  );
};
Dashboard.prototype = {
  auth: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  store: state.store,
  auth: state.auth,
});

export default connect(mapStateToProps, { getStoreByStoreOwner, getPosts })(
  Dashboard
);
