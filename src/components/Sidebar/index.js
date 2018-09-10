import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { ListLink } from "../../services/liens-sidebar";

class Sidebar extends React.Component {
  render = () => {
    return (
      <div className="sidebar-content">
        <p className="sidebar-title">
          {this.props.title}
        </p>
        { ListLink.map((link) => {
          return (
            <NavLink className="sidebar-item" activeClassName="active" to={this.props.prefixe+link.destination}> {link.name} </NavLink>
          );
        }) }
      </div>
    );
  }
}

export default Sidebar;
