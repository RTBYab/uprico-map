// SCSS is Login
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Form = ({ detail, title, phoneNumber, description, buttonTitle }) => {
  const [formData, setFormData] = useState({
    phone: "",
  });

  const { phone } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex parent">
          <div className="col-lg-5 col-md-5 login-panel-right ">
            <form className="form-group login-form-style">
              <div className="flex mx-auto">
                <div className="form-group">
                  <h3 className="text-center mb-5">{title}</h3>

                  <label htmlfor="exampleInputEmail1">{phoneNumber} :</label>
                  {/* <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => onChange(e)}
                    maxLength="9"
                    id="exampleInputEmail1"
                    placeholder="9xxxxxxxxx"
                    aria-describedby="emailHelp"
                    className="form-control text-center"
                  /> */}
                  <small
                    id="emailHelp"
                    className="form-text text-muted text-center mt-5"
                  >
                    {description}
                  </small>
                </div>
                <div className="d-flex justify-content-center mb-5">
                  <input
                    type="submit"
                    className="btn btn-dark w-75"
                    value={buttonTitle}
                  />
                </div>
                <div className="d-flex justify-content-center ">
                  <Link className="btn btn-transparent" to="/">
                    +G
                  </Link>
                </div>
                <small className="form-text text-muted text-center">
                  {detail}
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

Form.propTypes = {
  detail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default Form;
