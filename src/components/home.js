import React, { Component } from 'react';
import { GamesDataFile } from '../../data.js';
import venadosLogo from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/venados_escudo.png';
import Background from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/green_background.jpg';
import calendar from '/home/jeff/git_workspace/React-Projects/venado-test/assets/images/calendar.png';

var monthList;
const games = GamesDataFile.data.games;

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

const CalendarArrayCopa = {
  "Julio":
    [
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=NGZkZzAxcHAzYWhmMnFhYzBibHBvcGUzcDUgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com"
    ],
  "Agosto":
    [
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=NWZmdnBpa3FmMzFvNzMwOHZwZTNwNHRubXQgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com"
    ],
  "Septiembre":
    [
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=MmQzcW8wdW9lZGdyOWZzZDQ4NWY5ZTc2dm0gZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com"
    ],
  "Noviembre":
    [
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=NW8xcjc0bTFyYXNqcWttbmduc3Q0ZTlzdGIgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com"
    ]
}

const CalendarArrayAscenso = {
  "Agosto":
    [
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=M2VqdDMya3JpOWdpdXJhOTVwZXA3b2xkdTQgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=MjBnaXZodmoxZDFhazI5dXJtMTc4MW5hcmIgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=M2ZvM2xudnVvbHRicGQ0MGk3NWVzZjljcGYgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=Mmh0aHZlMzI0bzdnZWVrbXJyam1vb204aHUgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=NThwbjc4dTRnbTQxbmhqY2Voa2s3ZWVybGIgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com"
    ],
  "Septiembre":
    [
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=MjJxNzEzaTl1MDNzdjRlMnE5ZnY2cjAxZTUgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=NGhnZTRoNXZxNWgzMHIxMG1wcXNmZXI3dDQgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=M2R0dDFhcTc3ZGp1NXR0bTdxNGs0c29icmUgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
    ],
  "Octubre": [
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=M2R0dDFhcTc3ZGp1NXR0bTdxNGs0c29icmUgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=N3AxYmN2Mjhxb282Z2NzZHI3cGZqOXV0OGogZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=MXRqN2JiN3ZuZDJzbGcwZWQ0YW5mNW9pcHIgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
  ],
  "Noviembre": [
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=NHZiMnYxNTkwZWE1aW1ybDQ1NzNmamIydWQgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com",
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=M21obWFsZG1hMThuMDY4cDVtMDZ0dDg5M3YgZ2pqbW5sazQ0NXY1NmM5bGgyaTBqaDg0czRAZw&tmsrc=gjjmnlk445v56c9lh2i0jh84s4%40group.calendar.google.com"
  ]

}



class Home extends Component {

  constructor(props) {
    super(props);
    this.selectorRef = React.createRef();

    this.state = {
      league: "ASCENSO MX",
      sticky: ""
    }

    this.changeLeague = this.changeLeague.bind(this);
    this.gameList = this.gameList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const selector = this.selectorRef.current;
    var sticky = selector.offsetTop;

    if (this.state.sticky === 'sticky' && window.pageYOffset < 140) {
      this.setState({
        sticky: "",
      })
    } else if (window.pageYOffset >= sticky - 46 ) {
        this.setState({
          sticky: "sticky",
        })
      }
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
    let leagueGames = () => league === "ASCENSO MX" ? getGamesAscenso() : getGamesCopa();
    leagueGames().forEach((el) => {
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
                <a target="_blank" href={this.state.league === "COPA MX" ? CalendarArrayCopa[month][i] : CalendarArrayAscenso[month][i]}>
                  <img className='calendar-image' src={calendar} />
                </a>
                <p className='day-number'>{getDayNum(leagueByMonth[month][i].datetime)}</p>
                <p className='day-word'>{getDayName(leagueByMonth[month][i].datetime)}</p>
              </div>
              <div className='team-container'>
                <img className='team-image team-image-venados' src={venadosLogo} />
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
      this.setState({
        league: league
      })
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
        <div className={`selector-container ${this.state.sticky}`} ref={this.selectorRef}>

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