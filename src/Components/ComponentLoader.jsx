import React, { useEffect, useState } from "react";

function ComponentLoader(props) {
  const [state, setState] = useState({
    Component: null
  });
  useEffect(() => {
    props.loader().then(Component => {
      setState({
        Component:
          Component && Component.default ? Component.default : Component
      });
    });
  }, []);
  const { Component } = state;
  return Component ? <Component {...props} /> : null;
}
export default ComponentLoader;
