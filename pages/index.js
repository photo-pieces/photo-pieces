import css from "../styles/home.scss";

import RouterLink from "next/link";

import { Button, Link } from "../components/Buttons";
import React from "react";

import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";

function AppLogo() {
  return (
    <div className={css["logo"]}>
      <div className={css["shape2"]} />
      <div className={css["shape2"]} />
      <div className={css["shape2"]} />
      <div className={`${css["shape2"]} ${css["shape3"]}`} />
    </div>
  );
}

function Home() {
  return (
    <div className={css["home"]}>
      <div className={`${css["section"]} ${css["section-hamburger"]}`}>
        <RouterLink href="/setting">
          <Hamburger />
        </RouterLink>
      </div>
      <div className={`${css["section"]} ${css["section-logo"]}`}>
        <AppLogo />
      </div>
      <div className={css["section"]}>
        <RouterLink href="/game">
          <Button>Play</Button>
        </RouterLink>
      </div>
      <div className={css["section"]}>
        <RouterLink href="/history">
          <Link>View History</Link>
        </RouterLink>
      </div>
      <div className={css["section"]}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
