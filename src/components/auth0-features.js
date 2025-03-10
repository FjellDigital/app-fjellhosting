import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Raskt og enkelt",
      description:
        "Sett opp din Google Tag Manager Server container på under 5 minutter. Følg vår offisielle guide for 1-2-3 setup.",
      resourceUrl: "https://auth0.com/docs/connections",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Sikkert",
      description:
        "Vår løsning er bygget på det seneste innenfor sikkerhet og personvern. Din datasikkerhet er vår største prioritet.",
      resourceUrl: "https://auth0.com/docs/multifactor-authentication",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Skalerbart",
      description:
        "Velg selv planen som passer deg og oppgrader automatisk når du når din månedlige grense. Ikke mist verdifull data.",
      resourceUrl: "https://auth0.com/docs/attack-protection",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "GDPR- og norsk ekomlov-kompatibel",
      description:
        "Vår løsning er helnorsk og ingen data forlater hverken Norge eller EU.",
      resourceUrl: "https://auth0.com/docs/actions",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Hvorfor velge Fjell Hosting</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
