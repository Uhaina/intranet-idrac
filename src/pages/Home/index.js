import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  render = () => (
    <div className="home-page">
      <div className="banner">
        <h1 className="title">IDR<span className="react-title">E</span>AC<span className="react-title">T</span></h1>
        <img src="http://davidvelten.fr/cname/preprod-intranet-idrac/logo.svg" className="App-logo" alt="logo"/>
        <div className="typed-txt">
          L'espace étudiant de l'IDRAC Montpellier
        </div>
        <Link className="link-to-cours" to="/cours">
          <div className="boutton-get-started">
            <code>Accès aux cours</code>
          </div>
        </Link>
      </div>
    </div>
  )
}