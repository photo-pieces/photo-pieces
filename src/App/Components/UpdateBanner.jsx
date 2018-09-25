import React from "react";
import ReactGA from './../utils/ga';
class Banner extends React.Component {
  state = { open: true };
  clickHandler=()=> {
    this.setState({
      open:false
    })
    ReactGA.event({ category: "Update", action: "Update Banner" });
    setTimeout(function(){
      window.location="/";
    },250);
  }
  render() {
    const cls = ["update"];
    if (this.state.open) {
      cls.push("open");
    }
    return <div className={cls.join(" ")} onClick={this.clickHandler}>
        <div className="inner-container">
          <div className="text">New update available !</div>
          <img src="/assets/images/refresh.svg" alt="Update Banner" />
        </div>
      </div>;
  }
}

export default Banner;
