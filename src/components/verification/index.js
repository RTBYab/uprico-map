import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useState } from "react";
import { verfication } from "../../redux/actions/auth";
import { Redirect, withRouter } from "react-router-dom";

const Verification = ({
  verfication,
  // mobileNumber,
  isAuthenticated,
  history,
  ...props
}) => {
  const [formData, setFormData] = useState({
    code: "",
  });

  const { code } = formData;
  let mobileNumber = props.location.state.data;
  console.log("dddddata", props.location.state.data);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(e);
    // console.log("mmmm", typeof mobileNumber);
    verfication({ code, history, mobileNumber });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex parent">
          <div className="col login-panel-right ">
            <form
              className="form-group login-form-style"
              onSubmit={(e) => onSubmit(e)}
            >
              <div className="flex mx-auto">
                <div className="form-group">
                  <h3 className="text-center mb-5"> اعتبار سنجی</h3>

                  <label htmlFor="exampleInputEmail1">کد دریافتی :</label>
                  <input
                    required
                    type="number"
                    name="code"
                    onChange={(e) => onChange(e)}
                    maxLength="9"
                    id="exampleInputEmail1"
                    placeholder="xxxxxx"
                    aria-describedby="emailHelp"
                    className="form-control text-center"
                  />
                </div>
                <div className="d-flex justify-content-center mb-5">
                  <input
                    type="submit"
                    className="btn btn-dark w-75"
                    value="اعتبار سنجی"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Verification.propTypes = {
  // mobileNumber: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  verfication: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // mobileNumber: state.auth.mobileNumber,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { verfication })(
  withRouter(Verification)
);
