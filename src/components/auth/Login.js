import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import Form from "../form";

const Login = ({ login, isAuthenticated }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div onSubmit={(e) => onSubmit(e)}>
      <Form
        title="ورود "
        detail="با اکانت گوگل وارد شوید"
        phoneNumber="شماره همراه"
        description=" لطفا شماره همراه را بدون صفر وارد نمائید"
        buttonTitle="ثبت نام"
      />
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  detail: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
