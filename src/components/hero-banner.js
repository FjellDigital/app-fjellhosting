import React from "react";

export const HeroBanner = () => {
  const logo =
    "https://imagedelivery.net/cQwdhF-H4tUVK8IxRhv2kQ/a2a6657f-07be-42ff-623b-2f3543989300/public";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img
          className="hero-banner__image"
          src={logo}
          alt="Fjell Hosting Logo"
        />
      </div>
      <h1 className="hero-banner__headline">
        Fjell Hosting Server- Side Sporing
      </h1>
      <p className="hero-banner__description">
        Velkommen til <strong>Fjell Hosting</strong>.
      </p>
    </div>
  );
};
