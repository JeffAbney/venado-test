import React, { Component } from 'react';
import { PlayersDataFile } from '../../data.js';
import OutsideAlerter from './popUp.js';

const PlayersList = PlayersDataFile.data.team;



//Create PopUp Window for players --------------------------------------

// Get the modal



// When the user clicks anywhere outside of the modal, close it


class Players extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pop: false,
      currentPlayer: null,
    }
    this.openPop = this.openPop.bind(this);
    this.closePop = this.closePop.bind(this);
    this.PlayersXML = this.PlayersXML.bind(this);

  }

  // When the user clicks on the button, open the modal
  openPop(player) {
    console.log("opening pop")
    this.setState({
      pop: true,
      currentPlayer: player,
    })
  }

  closePop() {
    console.log("trying to close pop")
    this.setState({
      pop: false,
    })
  }

  PlayersXML() {
    return (
      Object.keys(PlayersList).map((pos) =>
        PlayersList[pos].map((player, i) =>
          <div className="player-box" key={`player-${i}`} onClick={() => this.openPop(player)}>
            <div className="player-image-container">
              <img className="player-image" src={player.image} />
            </div>
            <p className="player-text player-position">{player.position}</p>
            <p className="player-text player-name">{`${player.name} ${player.first_surname}`}</p>
          </div>
        )
      )
    )
  }
getFormatedDate(playerBirthday) {
  var birthdayDT = new Date(playerBirthday);
var dd = birthdayDT.getDate();
var mm = birthdayDT.getMonth() + 1; //January is 0!

var yyyy = birthdayDT.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var birthday = dd + '/' + mm + '/' + yyyy;
return birthday;
}
  

  render() {

    let { currentPlayer } = this.state;

    return (
      <div className="players" id="players">
        {this.PlayersXML()}

        {/* Create Player PopUp */}
        {this.state.pop ?
          <div className='modal'>
            <OutsideAlerter classes={"modal-content"} closePop={this.closePop}>
              <div className="pop-up-info-container">
                <h1 className='pop-up-info-title'>Ficha Tecnica</h1>
                <div className="pop-up-image-container">
                  <img className="pop-up-image" src={currentPlayer.image} />
                </div>
                <p className="pop-up-name">
                  {`${currentPlayer.name} ${currentPlayer.first_surname}`}
                </p>
                <p className="pop-up-position">
                  {`${currentPlayer.position}`}
                </p>
                <div className="player-detail">
                  <h2 className="pop-up-detail-title">FECHA DE NACIMIENTO</h2>
                  <p className="pop-up-detail-data">{this.getFormatedDate(currentPlayer.birthday)}</p>
                  <h2 className="pop-up-detail-title">LUGAR DE NACIMIENTO</h2>
                  <p className="pop-up-detail-data">{currentPlayer.birth_place}</p>
                  <h2 className="pop-up-detail-title">PESO</h2>
                  <p className="pop-up-detail-data">{`${String(currentPlayer.weight)} KG`}</p>
                  <h2 className="pop-up-detail-title">ALTURA</h2>
                  <p className="pop-up-detail-data">{`${String(currentPlayer.height)} M`}</p>
                  <h2 className="pop-up-detail-title">EQUIP ANTERIOR</h2>
                  <p className="pop-up-detail-data">{currentPlayer.last_team}</p>
                  <h2 className="pop-up-detail-title">NUMERO</h2>
                  <p className="pop-up-detail-data">{String(currentPlayer.number)}</p>
                </div>
              </div>

            </OutsideAlerter>
          </div>
          :
          <p></p>}

      </div>
    )
  }
}

export default Players;