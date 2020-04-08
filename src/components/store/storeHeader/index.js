import React from "react";
import PropTypes from "prop-types";

const Header = ({ props }) => {
  return (
    <header className="dashboard-header">
      <div className="container mt-5 m-auto py-2">
        <div className="row  text-center">
          <div className="col-4">نظرات</div>
          <div className="col-4 ">امتیازات</div>
          <div className="col-4 ">مشتریان</div>
        </div>

        <div className="row  text-center">
          <div className="col-4 ">اول</div>
          <div className="col-4 ">سوم</div>
          <div className="col-4 ">دوم</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
