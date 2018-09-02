import React, { Component } from 'react';
import "./styles.scss";
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cours from './pages/Cours';
import Rendu from './pages/Rendu';
import CarnetAdresse from './pages/Carnet-Adressse';
import Agenda from './pages/Agenda';
import LiensUtiles from './pages/LiensUtiles';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="page-container">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cours' component={Cours} />
            <Route path="/rendu" component={Rendu} />
            <Route path="/agenda" component={Agenda} />
            <Route path='/carnet-adresse' component={CarnetAdresse} />
            <Route path='/liens-utiles' component={LiensUtiles} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
