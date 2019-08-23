import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './myStyles.scss';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Home: null,
    };

  }

  componentDidMount() {
    import(/* webpackChunkName: 'Home' */ './components/home.js').then(Home => {
      this.setState({ Home: Home.default })
    });
  }


  render() {
    const { Home } = this.state;

    return (
      <Router>
        <Route exact={true} path="/" render={() => (
          <div className="app">
            {Home ? <Home /> : <p>Loading...</p>}
          </div>
        )} />
      </Router>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));