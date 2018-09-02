import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SidebarAgenda from "components/Sidebar-Agenda";
import AgendaInternational from "pages/Agenda-International";
import AgendaMarketing from "pages/Agenda-Marketing";
import AgendaVente from "pages/Agenda-Vente";
import AgendaHome from "pages/Agenda-Home";


export default class extends React.Component {
  render = () => {
    return (
      <div className="cours-page">
        <div className="content-page">
          <Switch>
            <Route exact path="/agenda" component={AgendaHome} />
            <Route exact path="/agenda/international" component={AgendaInternational} />
            <Route exact path="/agenda/marketing-digital" component={AgendaMarketing} />
            <Route exact path="/agenda/vente" component={AgendaVente} />
          </Switch>
        </div>
        <SidebarAgenda className="sidebar-mobile" />
      </div>
    );
  }
}