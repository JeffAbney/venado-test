
import React, { Component } from "react";
import drawer_icon from "/home/jeff/git_workspace/React-Projects/venado-test/assets/images/drawer_icon.png";
import venados_escudo from "/home/jeff/git_workspace/React-Projects/venado-test/assets/images/venados_escudo.jpg";



class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggleActive = this.toggleActive.bind(this);
    this.goToScreen = this.goToScreen.bind(this);
    this.drawerMenu = this.drawerMenu.bind(this);
  }

  toggleActive() {
    console.log("Clicky");
    this.setState({
      active: true,
    })
  }

  goToScreen(param) {
    console.log("Go to", param);
    this.setState({
      active: false,
    })
    this.props.changeScreen(param);
  }

  drawerMenu = () => {
    if (this.state.active) {
      return (
        <div className="drawer-menu">
          <div className="drawer-header">
            <img className="drawer-header-image" src={venados_escudo} />
          </div>
          <div className="drawer-list">
            <div className="drawer-item" onClick={() => this.goToScreen("Home")}>
              <div className="drawer-item-icon-container">
                <div className="drawer-item-dot"></div>
              </div>
              <div className="drawer-text-container">
                <p className="drawer-text">Home</p>
              </div>
            </div>

            <div className="drawer-item" onClick={() => this.goToScreen("Stats")}>
              <div className="drawer-item-icon-container">
                <div className="drawer-item-dot"></div>
              </div>
              <div className="drawer-text-container">
                <p className="drawer-text">Statistics</p>
              </div>
            </div>

            <div className="drawer-item" onClick={() => this.goToScreen("Players")}>
              <div className="drawer-item-icon-container">
                <div className="drawer-item-dot"></div>
              </div>
              <div className="drawer-text-container">
                <p className="drawer-text">Players</p>
              </div>
            </div>
          </div>
        </div>);
    } else {
      return <p></p>;
    }

  }

  render() {
    return (

      <div className="header" id="header">
        <div className="hamburger-icon-container">
          <img className="drawer-icon" src={drawer_icon} onClick={this.toggleActive} />
        </div>
        {this.drawerMenu()}
      </div>
    )
  }
}

export default Header;