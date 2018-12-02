import "../styles/home.scss";

import * as ServiceWorker from "../utils/service-worker";

import { Button, Link } from "../Components/Buttons";
import React, { useContext, useEffect, useState } from "react";

import { AudioContext } from "../Components/AudioManager";
import Footer from "../Components/Footer";
import Hamburger from "../Components/Hamburger";
import UpdateBanner from "../Components/UpdateBanner";
import { fetchCurrentGame } from "../utils/game";

function AppLogo() {
  return (
    <div className="logo shape1">
      <div className="shape2" />
      <div className="shape2" />
      <div className="shape2" />
      <div className="shape2 shape3" />
    </div>
  );
}
function useHome(history) {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    ServiceWorker.onUpdate(() => {
      setShowBanner(true);
    });
  }, []);
  function clickHandler(mute, muted) {
    mute(!muted);
    mute(muted);
    history.replace("/new-game", fetchCurrentGame());
  }
  return [showBanner, clickHandler];
}
function Home({ history }) {
  const [showBanner, clickHandler] = useHome(history);
  const { methods, muted } = useContext(AudioContext);
  return (
    <div className="home">
      {showBanner && <UpdateBanner />}
      <AppLogo />
      <Button onClick={e => clickHandler(methods.mute, muted)}>Play</Button>
      <Link onClick={e => history.replace("/history")}>View History</Link>
      <div className="hamburger-wrapper">
        <Hamburger onClick={() => history.replace("/setting")} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
