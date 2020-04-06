import React from "react";
import Loader from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color=" #061951" />
    </div>
  );
}
