import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './myStyles.scss';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Home: null,
      Stats: null,
      Players: null,
      Active: "Home"
    };

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
  }


  render() {
    const { Home, Stats, Players, Active } = this.state;

    return (
      <Router>
        <Route exact={true} path="/" render={() => (
          <div className="app">
            {Home && Active === "Home" ? <Home /> : <p></p>}
            {Stats && Active === "Stats" ? <Stats /> : <p></p>}
            {Players && Active === "Players" ? <Players /> : <p></p>}
          </div>
        )} />
      </Router>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));