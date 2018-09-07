import React from "react";

import "../styles/home.css";

import UpdateBanner from "./UpdateBanner";
import * as ServiceWorker from "./../service-worker";

class Home extends React.Component {
  state = {
    showBanner: false
  };
  componentWillMount() {
    ServiceWorker.onUpdate(() => {
      this.setState({ showBanner: true });
    });
  }
  render() {
    const { props } = this;
    return <div className="home">
        {this.state.showBanner && <UpdateBanner />}
        <div className="logo shape1">
          <div className="shape2" />
          <div className="shape2" />
          <div className="shape2" />
          <div className="shape2 shape3" />
        </div>
        <button className="btn" onClick={e => {
            props.history.push("/new-game");
          }}>
          <div>Play</div>
        </button>
      </div>;
  }
}
export default Home;
