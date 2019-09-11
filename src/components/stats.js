import React from 'react';
import logo from '../static/images/venados_escudo.png';
import background from '../static/images/green_background.jpg';


//Stats API is empty, substituted invented data and hardcoded it.
const position = "1";
const jj = "2";
const dg = "5";
const pts = "6";

export default () => (
    <div className="stats" id="stats">
      <div className="stats-header">
        <div className="stats-title-container">
        <p className="stats-title">Tabla General</p>
        </div>
        <div className="stats-abb-container">
          <p className="stats-abb">JJ</p>
          <p className="stats-abb">DG</p>
          <p className="stats-abb">PTS</p>
        </div>
      </div>
      <div className="stats-row" style={{ backgroundImage: "url(" + background + ")" }}>
        <div className="stats-team-container">
          <p className="stats-team-item stats-position">{position}</p>
          <div className="stats-team-item stats-image-container">
            <img src={logo} className="stats-image"/>
          </div>
          <p className='stats-team-item stats-team-name'>Venados F.C.</p>
        </div>
        <div className="stats-data-container">
          <p className="stats-item stats-data">{jj}</p>
          <p className="stats-item stats-data">{dg}</p>
          <p className="stats-item stats-data">{pts}</p>
        </div>
      </div>
    </div>
  )