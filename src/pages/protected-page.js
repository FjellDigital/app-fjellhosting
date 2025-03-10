import React, { useEffect } from "react"; // Removed useState
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const ProtectedPage = () => {
  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      await getProtectedResource(); // Removed `data` and `error`
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
