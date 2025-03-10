import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://imagedelivery.net/cQwdhF-H4tUVK8IxRhv2kQ/a2a6657f-07be-42ff-623b-2f3543989300/Square"
          alt="Fjell Hosting logo"
        />
      </NavLink>
    </div>
  );
};
