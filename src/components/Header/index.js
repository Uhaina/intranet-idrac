import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class Header extends React.Component {
  state = {
    menuOpen: false
  };

  activeBurger = () => {
    if(this.state.menuOpen === true) {
      this.setState({
        menuOpen: false
      });
    }
    else {
      this.setState({
        menuOpen: true
      })
    }
  };

  render = () => {
    var responsiveClass = "header-component-responsive";

    if (this.state.menuOpen === true) {
      responsiveClass += " active";
    }

    return (
      <div className="header-component">
          <div className="header-component-content">
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
              <a href="https://outlook.office.com/owa/?realm=idracmontpellier.net" target="_blank" className="header-item-outlook">
                <img src="outlook.png" className="github-logo"/>
              </a>
              <a href="https://github.com/Uhaina/intranet-idrac" target="_blank">
                <img src="http://intranet-idrac.fr/icons8-github100.png" className="github-logo"/>
              </a>
            </div>
            <div className="menu-mobile" onClick={this.activeBurger}>
              { this.state.menuOpen === true ? (
                <img src="/cross.png" className="github-logo"/>
              ) : (
                <img src="http://intranet-idrac.fr/menuburger.png" className="github-logo"/>
              ) }
            </div>
          </div>
        <div className={responsiveClass}>
          <p className="menu-burger-title">Menu</p>
          <NavLink className="menu-burger-item" onClick={this.activeBurger} to='/cours'>Cours</NavLink>
          <NavLink className="menu-burger-item" onClick={this.activeBurger} to='/rendu'>Rendu</NavLink>
          <NavLink className="menu-burger-item" onClick={this.activeBurger} to='/agenda'>Agenda</NavLink>
          <NavLink className="menu-burger-item" onClick={this.activeBurger} to='/carnet-adresse'>Carnet d'adresse</NavLink>
          <NavLink className="menu-burger-item" onClick={this.activeBurger} to='/liens-utiles'>Liens Utiles</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;