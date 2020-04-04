import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, auth }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password2 !== password) {
      setAlert("پسوردها باید یکسان باشند", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">ثبت نام</h1>
      <p className="lead">ثبت فروشگاه </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="نام فروشگاه"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="ایمیل"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            placeholder="رمز عبور"
            onChange={e => onChange(e)}
            name="password"
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password2}
            onChange={e => onChange(e)}
            placeholder="تکرار رمز عبور"
            name="password2"
            // required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="ثبت نام" />
        <p className="my-1">
          {" "}
          قبلا ثبت نام کرده اید؟<Link to="/login">وارد شوید؟</Link>
        </p>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  auth: PropTypes.object
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, register })(Register);
