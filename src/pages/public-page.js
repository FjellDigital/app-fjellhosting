import React, { useEffect } from "react";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";

export const PublicPage = () => {
  useEffect(() => {
    const getMessage = async () => {
      await getPublicResource();
    };

    getMessage();
  }, []);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Hva er server- side sporing?
        </h1>
      </div>
    </PageLayout>
  );
};
