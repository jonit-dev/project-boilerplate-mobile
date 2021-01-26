import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";

import Menu from "../../components/SideMenu/Menu";
import { MainScreen } from "./Main.screen";
import { ChangePasswordScreen } from "./Settings/ChangePassword.screen";

export const MainPageRouter: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route
              path="/main/settings/change-password"
              component={ChangePasswordScreen}
              exact
            />
            <Route path="/main/:name" component={MainScreen} exact />
            <Redirect from="/main" to="/main/feed" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
