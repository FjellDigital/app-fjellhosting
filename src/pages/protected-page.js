import React, { useEffect } from "react";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const ProtectedPage = () => {
  useEffect(() => {
    const getMessage = async () => {
      await getProtectedResource();
    };

    getMessage();
  }, []);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Dine servere
        </h1>
      </div>
    </PageLayout>
  );
};
