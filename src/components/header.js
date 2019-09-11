
import React, { Component } from "react";
import drawer_icon from "/home/jeff/git_workspace/React-Projects/venado-test/assets/images/drawer_icon.png";
import venados_escudo from "/home/jeff/git_workspace/React-Projects/venado-test/assets/images/venados_escudo.png";
import OutsideAlerter from './popUp.js';


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
    };

    this.toggleActive = this.toggleActive.bind(this);
    this.goToScreen = this.goToScreen.bind(this);
    this.closePop = this.closePop.bind(this);
  }

  toggleActive() {
    this.setState({
      menuActive: true,
    })
  }

  goToScreen(param) {
    console.log("Go to", param);
    this.setState({
      menuActive: false,
    })
    this.props.changeScreen(param);
  }

  closePop() {
    this.setState({
      menuActive: false,
    })
  }


  render() {
    return (

      <div className="header" id="header">
        <div className="header-title">
          <div className="hamburger-icon-container">
            <img className="drawer-icon" src={drawer_icon} onClick={this.toggleActive} />
          </div>
          <h1 className="header-text">{this.props.activeScreen}</h1>
        </div>


        <OutsideAlerter
          classes={`drawer-menu ${this.state.menuActive ? 'menu-active' : ''}`}
          closePop={this.closePop}
        >
          <div className="drawer-header">
            <img className="drawer-header-image" src={venados_escudo} />
          </div>
          <div className="drawer-list">
            <div className={this.props.activeScreen === "Home" ? "drawer-item-active" : "drawer-item"}
              onClick={() => this.goToScreen("Home")}>
              <div className="drawer-item-icon-container">
                <div className="drawer-item-dot"></div>
              </div>
              <div className="drawer-text-container">
                <p className="drawer-text">Home</p>
              </div>
            </div>

            <div className={this.props.activeScreen === "Stats" ? "drawer-item-active" : "drawer-item"}
              onClick={() => this.goToScreen("Stats")}>
              <div className="drawer-item-icon-container">
                <div className="drawer-item-dot"></div>
              </div>
              <div className="drawer-text-container">
                <p className="drawer-text">Statistics</p>
              </div>
            </div>

            <div className={this.props.activeScreen === "Players" ? "drawer-item-active" : "drawer-item"}
              onClick={() => this.goToScreen("Players")}>
              <div className="drawer-item-icon-container">
                <div className="drawer-item-dot"></div>
              </div>
              <div className="drawer-text-container">
                <p className="drawer-text">Players</p>
              </div>
            </div>
          </div>
        </OutsideAlerter>
      </div>

    )
  }
}

export default Header;