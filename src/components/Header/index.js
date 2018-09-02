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
          <a href="https://github.com/Uhaina/intranet-idrac" target="_blank">
            <img src="http://intranet-idrac.fr/icons8-github100.png" className="github-logo"/>
          </a>
          <a href="https://fs.campus-cd.net/adfs/ls/?client-request-id=bba0324b-a83b-4fca-b9ba-74637c8ab4df&username=&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQIIAY2RPW_TQACGc_kwbYSgQh2Yqgp1QJUuvrPPnwghJyZWm1A3HyC1SxU758aqnXOdS1IFRgZUCakDU6eKCTIiBij_IFPnLqyICTExkoiFsc_w6J2fdzOHS9jcQP-Q4MIQBQGGPl2s_0jvFVdq0sW3Rx9m7tdL7r86_fz9HKyG3bTjx6zPExpFIU1Lfcqn4EGP82RgiiIb8oixoxILgtCnsqqUfBaLbNwRvwBwBcA0q6myqiFsqJqkI6IgDcslTSYSkSUD0k7Hg0TrqtDwFR0a1PACKkl-gMh19q5rDXlPWoil4YT-zi4HLI0PEjbg57mXts_rNrMObavcRNUdUqm3nreG-MRyeEhC6Jy4ozoZ4GFqO7GnpU6DjXpOpWZHekisZ7K1y8Z-pRIfuk9R4sIt7Ib9CTlqRB5J9nZC25NjRx1N2lxVRjX64gAjurtnNNEobevT3I2SfsoJ8xrzeLOcwBLaD7tXefAzfxsVzKWl4sqd-5n1zJ88eF-Yp3_y8CN9d6puv319sbaxWc7MCmJq1Pp4rBKntt3Ew2g8sMpREjkpdwdb1ZbadI6rYoSVdrPdeIxMfCaAM0H4IYBfAnhzK3O5fIOTrourEsI6RDrE-jqWTaKYkr7_Fw2" target="_blank" className="header-item">Outlook <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="outBox"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
        </div>
        <div className="menu-mobile">
            <img src="http://intranet-idrac.fr/menuburger.png" className="github-logo"/>
        </div>
      </div>
    );
  }
}

export default Header;