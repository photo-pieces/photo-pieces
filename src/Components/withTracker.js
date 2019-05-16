import React from "react";
import ReactGA from "./../utils/ga";

const withTracker = WrappedComponent => {
  const trackPage = page => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const HOC = props => {
    const page = props.location.pathname;
    trackPage(page);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
