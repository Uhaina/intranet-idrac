import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

class SidebarCours extends React.Component {
  render = () => {
    return (
      <div className="sidebar-cours-content">
        <p className="sidebar-cours-title"> Cours par Spé </p>
        <NavLink className="sidebar-cours-item" activeClassName="active" to='/cours/international'>International</NavLink>
        <NavLink className="sidebar-cours-item" activeClassName="active" to='/cours/marketing-digital'>Marketing Digital</NavLink>
        <NavLink className="sidebar-cours-item" activeClassName="active" to='/cours/vente'>Vente</NavLink>
      </div>
    );
  }
}

export default SidebarCours;
