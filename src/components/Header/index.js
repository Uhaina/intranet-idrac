import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class Header extends React.Component {
  render = () => {
    return (
      <div className="header-component">
        <NavLink to='/'>
          <img className="logo-idrac" src="/logo_idrac.png"/>
        </NavLink>
        <div className="header-navigation">
          <NavLink className="header-item" activeClassName="active" to='/cours'>Cours</NavLink>
          <NavLink className="header-item" activeClassName="active" to='/rendu'>Rendu</NavLink>
          <NavLink className="header-item" activeClassName="active" to='/agenda'>Agenda</NavLink>
          <NavLink className="header-item" activeClassName="active" to='/carnet-adresse'>Carnet d'adresse</NavLink>
          <NavLink className="header-item" activeClassName="active" to='/liens-utiles'>Liens Utiles</NavLink>
        </div>
        <div className="header-out-website">
          <img src="/icons8-github100.png" className="github-logo"/>
          <a href="http://www.google.fr" target="_blank" className="header-item">Outlook</a>
          <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="outBox"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
        </div>
      </div>
    );
  }
}

export default Header;