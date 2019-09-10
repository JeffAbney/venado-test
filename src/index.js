import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './myStyles.scss';
import Header from './components/header.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Home: null,
      Stats: null,
      Players: null,
      activeScreen: "Home",
      games: null,
    };

    this.changeScreen = this.changeScreen.bind(this);
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    import(/* webpackChunkName: 'Home' */ './components/home.js').then(Home => {
      this.setState({ Home: Home.default })
    });
    import(/* webpackChunkName: 'Stats' */ './components/stats.js').then(Stats => {
      this.setState({ Stats: Stats.default })
    });
    import(/* webpackChunkName: 'Players' */ './components/players.js').then(Players => {
      this.setState({ Players: Players.default })
    });
   // this.getGames();
  }

  getGames() {
    console.log("Getting Game Data");
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log("Wow!");
        console.log(this.responseText);
      } else {
        console.log("something is wrong");
      }
    });

    xhr.open("GET", "https://crossorigin.me/https://google.com");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "2aae1e05-7b5e-4703-98b5-548d58c4749c");

    xhr.send(data);
  }

  changeScreen(screen) {
    if (screen === "Home" || screen === "Stats" || screen === "Players") {
      this.setState({
        activeScreen: screen,
      })
    } else {
      return ("Not a valid screen")
    }
  }


  render() {
    const { Home, Stats, Players, activeScreen } = this.state;

    return (
      <Router>
        <Route exact={true} path="/" render={() => (
          <div className="app">
            <Header changeScreen={this.changeScreen} activeScreen={this.state.activeScreen} />
            {Home && activeScreen === "Home" ? <Home /> : ""}
            {Stats && activeScreen === "Stats" ? <Stats /> : ""}
            {Players && activeScreen === "Players" ? <Players /> : ""}
          </div>
        )} />
      </Router>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));