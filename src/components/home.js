import React, { Component } from 'react';
import { gamesDataFile } from '../../data.js';
import venadosLogo from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/venados_escudo1.jpg';
import Background from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/green_background.jpg';
import calendar from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/calendar.png';

var monthList;
const games = gamesDataFile.data.games;

let gamesCopa = null;
let gamesAscenso = null;

let getGamesCopa = () =>
  !gamesCopa ?
    games.filter((game) => game.league === "Copa MX")
    :
    gamesCopa;

let getGamesAscenso = () =>
  !gamesAscenso ?
    games.filter((game) => game.league === "Ascenso MX")
    :
    gamesAscenso;

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      league: getGamesAscenso(),
    }

    this.changeLeague = this.changeLeague.bind(this);
    this.gameList = this.gameList.bind(this);
  }

  //create list of objects like thesegames = {Agosto: [{game A}, {game B}], [Septiembre: {game C},]}
  CreateLeagueByMonth(league) {

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
      if (!monthList[gameMonth(el.datetime)]) {
        monthList[gameMonth(el.datetime)] = [el];
      } else {
        monthList[gameMonth(el.datetime)].push(el);
      }
    })
    return monthList;
  }

  gameList() {
    let leagueByMonth = this.CreateLeagueByMonth(this.state.league);
    let getDayNum = (dateTime) => new Date(dateTime).getDate().toString();
    let getDayName = (dateTime) => dlist[new Date(dateTime).getDay()].toUpperCase();

    const dlist =
      [
        "Dom",
        "Lun",
        "Mar",
        "Mié",
        "Jue",
        "Vie",
        "Sáb"
      ];

    const gamesXML =
      Object.keys(leagueByMonth).map((month) =>
        <div className='month-container' id={month} key={month}>
          <div className='month-name-container'>
            <p className='month-name'>{month.toUpperCase()}</p>
          </div>
          {leagueByMonth[month].map((game, i) =>
            <div className='game' id={i} key={`game-${i}`}>
              <div className='calendar-container'>
                <img className='calendar-image' src={calendar} />
                <p className='day-number'>{getDayNum(leagueByMonth[month][i].datetime)}</p>
                <p className='day-word'>{getDayName(leagueByMonth[month][i].datetime)}</p>
              </div>
              <div className='team-container'>
                <img className='team-image' src={venadosLogo} />
                <p className="team-name">Venados F.C.</p>
              </div>
              <div className='score-container'>
                <p className='score-text'>{game.local ?
                  `${game.home_score}-${game.away_score}`
                  :
                  `${game.away_score}-${game.home_score}`
                }</p>
              </div>
              <div className='team-container'>
                <img className='team-image' src={game.opponent_image} />
                <p className="team-name">{game.opponent.length <= 15 ? game.opponent : `${game.opponent.substring(0, 14)}.`}</p>
              </div>
            </div>
          )}
        </div>
      )
    return gamesXML;
  }

  changeLeague(league) {
    if (this.state.league !== league) {
      if (league === "ASCENSO MX") {
        this.setState({
          league: getGamesAscenso()
        })
      } else if (league === "COPA MX") {
        this.setState({
          league: getGamesCopa()
        })
      } else {
        console.log("Invalid League");
      }

    } else {
      console.log("Already there.")
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
            <p className="selector-text" onClick={() => this.changeLeague('COPA MX')}>COPA MX</p>
          </div>
          <div className="selector">
            <p className="selector-text" onClick={() => this.changeLeague('ASCENSO MX')}>ASCENSO MX</p>
          </div>
        </div>
        <div className="games-list-container" style={{ backgroundImage: "url(" + Background + ")" }}>
          {this.gameList()}
        </div>
      </div>
    )
  }
}

export default Home;