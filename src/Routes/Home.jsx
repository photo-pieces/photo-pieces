import React from "react";

import { Button, Link } from "../Components/Buttons";
import "../styles/home.css";

import UpdateBanner from "../Components/UpdateBanner";
import * as ServiceWorker from "../service-worker";

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
        <Button onClick={e => props.history.replace("/new-game")}>Play</Button>
        <Link onClick={e => props.history.replace("/history")}>
          View History
        </Link>
      </div>;
  }
}
export default Home;
