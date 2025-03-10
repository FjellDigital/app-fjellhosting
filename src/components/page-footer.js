import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Personvern",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "Hva er server- side sporing?",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Dokumentasjon",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Støtte",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Utviklet og levert av&nbsp;</span>
              <PageFooterHyperlink path="https://fjelldigital.no/">
                Fjell Digital
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Bestill og sett opp Google Tag Manager server-containere raskt
                  og enkelt&nbsp;
                </span>
                <u>på under 5 minutter</u>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://imagedelivery.net/cQwdhF-H4tUVK8IxRhv2kQ/951fb757-c55a-44b3-eb37-15af595c0700/public"
              alt="Fjell Digital"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="https://fjelldigital.no/">
              Fjell Digital AS
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
