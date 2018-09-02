import React from 'react';
import './styles.scss';

export default class extends React.Component {
  render = () => {
    return (
      <div className="liens-utiles-content">
        <div className="browser-mockup with-url">
          <img className="img-browser" src="http://davidvelten.fr/cname/preprod-intranet-idrac/logo-usetool.png"/>
          <p className="baseline">Tous les outils que vous cherchez !</p>
        </div>
        <div className="credit-usetool">
          <a href="http://usetool.fr" target="_blank">http://usetool.fr</a> - by Mehdi & Paul
        </div>
      </div>
    );
  }
}