import React from 'react';
import './styles.scss';

export default class extends React.Component {
  render = () => {
    return (
      <div className="liens-utiles-content">
        <div className="browser-mockup with-url">
          <img className="img-browser" src="http://davidvelten.fr/cname/preprod-intranet-idrac/logo-usetool.png"/>
          <p className="baseline">Tous les outils que vous cherchez !</p>
          <p className="description"><code>usetool.fr</code> est une banque d'outils en ligne regroupant plus d'une centaines de "tools" dans divers domaines : Marketing, PAO, Audit, Traducteurs, Web, Développement, etc ... . Vous trouverez tous les outils dont vous cherchez selon votre besoin !</p>
        </div>
        <div className="credit-usetool">
          <a href="https://usetool.fr" target="_blank"><code>https://usetool.fr</code></a>  - by Mehdi | Paul | David
        </div>
        <div className="avatars">
          <a href="https://mehditoualit.pro" target="_blank">
            <img src="http://intranet-idrac.fr/mehdi.png"  className="avatars-usetools mehdi"/>
          </a>
          <a href="http://paultramontin.pro" target="_blank">
            <img src="http://intranet-idrac.fr/paul.png" className="avatars-usetools paul"/>
          </a>
          <a href="http://davidvelten.fr" target="_blank">
            <img src="http://intranet-idrac.fr/david.png" className="avatars-usetools david"/>
          </a>
        </div>
      </div>
    );
  }
}