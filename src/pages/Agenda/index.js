import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from "../../components/Sidebar";
import AgendaInternational from "../../pages/Agenda-International";
import AgendaMarketing from "../../pages/Agenda-Marketing";
import AgendaVente from "../../pages/Agenda-Vente";
import AgendaHome from "../../pages/Agenda-Home";
import SidebarResponsive from "../../components/Sidebar-responsive";


export default class extends React.Component {
  render = () => {
    return (
      <div className="cours-page">
        <div className="content-page">
          <SidebarResponsive prefixe={"/agenda"} />
          <Switch>
            <Route exact path="/agenda" component={AgendaHome} />
            <Route exact path="/agenda/international" component={AgendaInternational} />
            <Route exact path="/agenda/marketing-digital" component={AgendaMarketing} />
            <Route exact path="/agenda/vente" component={AgendaVente} />
          </Switch>
        </div>
        <Sidebar
          title={"Agenda par Spé"}
          prefixe={"/agenda"}
        />
      </div>
    );
  }
}