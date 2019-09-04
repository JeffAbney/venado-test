import React, { Component } from 'react';
import { gamesDataFile } from '../../data.js';
import venadosLogo from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/venados_escudo.jpg';

var monthList;
const games = gamesDataFile.data.games;

const gamesCopa = games.filter((game) => game.league === "Copa MX");
const gamesAscenso = games.filter((game) => game.league === "Ascenso MX");

//create array of objects like thesegames = {Agosto: [{game A}, {game B}], [Septiembre: {game C},]}
const LeagueByMonth = function (league) {
  monthList = {};
  const mlist = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo ",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  let gameMonth = (dateTime) => mlist[new Date(dateTime).getMonth()];

  league.forEach((el) => {
    console.log(el.datetime);
    if (!monthList[gameMonth(el.datetime)]) {
      monthList[gameMonth(el.datetime)] = [el];
    } else {
      monthList[gameMonth(el.datetime)].push(el);
    }
  })
  return monthList;
}

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      league: "ascenso"
    }
  }

  render() {
    return (
      <div className="home" id="home">
        <div className="header-home">
          <img className="home-head-image" src={venadosLogo} />
        </div>
        <div className="selector-container">
          <div className="selector">
            <p className="selector-text" onClick={this.showCopa}>COPA MX</p>
          </div>
          <div className="selector">
            <p className="selector-text" onClick={this.showAscenso}>ASCENSO MX</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;