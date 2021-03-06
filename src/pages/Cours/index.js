import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.scss';

import Sidebar from "../../components/Sidebar";
import CoursInternational from "../../pages/Cours-International";
import CoursMarketing from '../../pages/Cours-Marketing';
import CoursVente from '../../pages/Cours-Vente';
import CoursHome from '../../pages/Cours-Home';
import SidebarResponsive from '../../components/Sidebar-responsive';

export default class extends React.Component {
  render = () => {
    return (
      <div className="cours-page">
        <div className="content-page">
          <SidebarResponsive prefixe={"/cours"} />
          <Switch>
            <Route exact path="/cours" component={CoursHome} />
            <Route exact path="/cours/international" component={CoursInternational} />
            <Route exact path="/cours/marketing-digital" component={CoursMarketing} />
            <Route exact path="/cours/vente" component={CoursVente} />
          </Switch>
        </div>
        <Sidebar
          title={"Cours par Spé"}
          prefixe={"/cours"}
        />
      </div>
    );
  }
}