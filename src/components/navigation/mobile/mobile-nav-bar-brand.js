import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://imagedelivery.net/cQwdhF-H4tUVK8IxRhv2kQ/a2a6657f-07be-42ff-623b-2f3543989300/Square"
          alt="Fjell Hosting logo"
          width="100"
          height="60"
        />
      </NavLink>
    </div>
  );
};
