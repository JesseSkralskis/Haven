import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

import Loader from "react-loader-spinner";

export default function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress && <Loader type="ThreeDots" color=" #061951" />}
    </div>
  );
}
