import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const ProtectedPage = () => {
  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getProtectedResource();

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
          Dine servere
        </h1>
      </div>
    </PageLayout>
  );
};
