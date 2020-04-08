import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginByPhone } from "../../redux/actions/auth";
import PropTypes from "prop-types";
// import Form from "../form";

const Login = ({ loginByPhone, isAuthenticated, history }) => {
  const [formData, setFormData] = useState({
    mobile: "",
  });

  const { mobile } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(e);
    loginByPhone(mobile, history);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex parent">
          <div className="col-lg-5 col-md-5 login-panel-right ">
            <form
              className="form-group login-form-style"
              onSubmit={(e) => onSubmit(e)}
            >
              <div className="flex mx-auto">
                <div className="form-group">
                  <h3 className="text-center mb-5">ورود</h3>

                  <label htmlFor="exampleInputEmail1">شماره همراه:</label>
                  <input
                    required
                    type="number"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => onChange(e)}
                    maxLength="9"
                    id="exampleInputEmail1"
                    placeholder="9xxxxxxxxx"
                    aria-describedby="emailHelp"
                    className="form-control text-center"
                  />
                  <small
                    id="emailHelp"
                    className="form-text text-muted text-center "
                  >
                    شماره همراه را بدون صفر وارد نمائید
                  </small>
                </div>
                <div className="d-flex justify-content-center mb-5">
                  <input
                    type="submit"
                    className="btn btn-dark w-75"
                    value="ثبت نام"
                  />
                </div>
                <div className="d-flex justify-content-center ">
                  <Link className="btn btn-transparent" to="/">
                    +G
                  </Link>
                </div>
                <small className="form-text text-muted text-center">
                  با اکانت گوگل وارد شوید
                </small>
              </div>
            </form>
          </div>
          <div className="col-lg-7 col-md-8 d-none d-sm-block text-center ">
            چپ
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginByPhone: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginByPhone })(Login);
