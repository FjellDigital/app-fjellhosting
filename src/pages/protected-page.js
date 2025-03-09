import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const ProtectedPage = () => {
  const [message, setMessage] = useState("");
  const [arg1, setArg1] = useState("");
  const [arg2, setArg2] = useState("");
  const [arg3, setArg3] = useState("");
  const [output, setOutput] = useState("Waiting for input...");

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getProtectedResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  const runScript = async () => {
    setOutput("Submitting job...");
    try {
      const response = await fetch("https://sst.fjellhosting.no/run-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arg1, arg2, arg3 }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Failed to submit job");
      }

      const { jobId } = await response.json();
      setOutput(`Job submitted. Job ID: ${jobId}. Checking status...`);

      pollJobStatus(jobId);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      console.error("Error:", error);
    }
  };

  const pollJobStatus = async (jobId) => {
    try {
      const response = await fetch(`https://sst.fjellhosting.no/job-status/${jobId}`);
      if (!response.ok) {
        throw new Error("Failed to check job status");
      }

      const { status, result, error } = await response.json();

      if (status === "completed") {
        setOutput(`Output: ${result.output}`);
      } else if (status === "failed") {
        setOutput(`Error: ${error}`);
      } else {
        setOutput(`Job status: ${status}. Checking again in 2 seconds...`);
        setTimeout(() => pollJobStatus(jobId), 2000);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      console.error("Error:", error);
    }
  };

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Protected Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves a <strong>protected message</strong> from an
              external API.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <CodeSnippet title="Protected Message" code={message} />
          <div>
            <input
              type="text"
              value={arg1}
              onChange={(e) => setArg1(e.target.value)}
              placeholder="Domene"
            />
            <input
              type="text"
              value={arg2}
              onChange={(e) => setArg2(e.target.value)}
              placeholder="Conteiner Config"
            />
            <input
              type="text"
              value={arg3}
              onChange={(e) => setArg3(e.target.value)}
              placeholder="Cluster Antall"
            />
            <button onClick={runScript}>Take Off</button>
            <p>{output}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
