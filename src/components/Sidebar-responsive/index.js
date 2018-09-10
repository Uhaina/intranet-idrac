import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListLink } from "../../services/liens-sidebar";
import './styles.scss';

class SidebarResponsive extends React.Component {
  render = () => {
    return (
      <div className="sidebar-responsive-content">
        { ListLink.map((link) => {
          return (
            <NavLink className="sidebar-responsive-item" activeClassName="active" to={this.props.prefixe+link.destination}> {link.name} </NavLink>
          );
        }) }
      </div>
    );
  }
}

export default SidebarResponsive;