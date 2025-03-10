import React, { useEffect } from "react";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";

export const PublicPage = () => {
  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getPublicResource();

      if (!isMounted) {
        return;
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
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
