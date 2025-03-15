"use client";

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: React.CSSProperties = {
  display: "block",
  margin: "100px auto",
};

interface LoadingPageProps {
  loading: boolean; // Prop to indicate loading state
}

const LoadingPage: React.FC<LoadingPageProps> = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
