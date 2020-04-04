import React, { Fragment } from "react";
import spinner from "../../utils/spinner.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="spinner loading ..."
    />
  </Fragment>
);
