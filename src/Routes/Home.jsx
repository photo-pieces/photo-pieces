import React from "react";

import { Button, Link } from "../Components/Buttons";
import "../styles/home.css";

import UpdateBanner from "../Components/UpdateBanner";
import * as ServiceWorker from "../service-worker";

import { AudioConsumer } from "../Components/AudioManager";
import Footer from '../Components/Footer';
class Home extends React.Component {
  state = {
    showBanner: false
  };
  UNSAFE_componentWillMount() {
    ServiceWorker.onUpdate(() => {
      this.setState({ showBanner: true });
    });
  }
  clickHandler = silent => {
    silent(false);
    this.props.history.replace("/new-game");
  };
  render() {
    const { props } = this;
    return (
      <div className="home">
        {this.state.showBanner && <UpdateBanner />}
        <div className="logo shape1">
          <div className="shape2" />
          <div className="shape2" />
          <div className="shape2" />
          <div className="shape2 shape3" />
        </div>
        <AudioConsumer>
          {({ silent }) => (
            <Button onClick={e => this.clickHandler(silent)}>Play</Button>
          )}
        </AudioConsumer>
        <Link onClick={e => props.history.replace("/history")}>
          View History
        </Link>
        <Footer/>
      </div>
    );
  }
}
export default Home;
