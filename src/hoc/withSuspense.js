import React from "react";
import { Preloader } from "../components/common/Preloader/Preloader";

export const WithSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<div>loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
