import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-&{alert.alertType}`}>
      {console.log(alert)}
      {alert.msg}
    </div>
  ));

index.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToTprops = state => ({
  alerts: state.alert
});

export default connect(mapStateToTprops)(index);
