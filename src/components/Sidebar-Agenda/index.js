import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom'

class SidebarAgenda extends React.Component {
  render = () => {
    return (
      <div className="sidebar-agenda-content">
        <p className="sidebar-agenda-title">Agenda par Spé</p>
        <NavLink className="sidebar-agenda-item" activeClassName="active" to='/agenda/international'>International</NavLink>
        <NavLink className="sidebar-agenda-item" activeClassName="active" to='/agenda/marketing-digital'>Marketing Digital</NavLink>
        <NavLink className="sidebar-agenda-item" activeClassName="active" to='/agenda/vente'>Vente</NavLink>
      </div>
    );
  }
}

export default SidebarAgenda;
