import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import { AuthScreen } from "./Auth.screen";
import { ForgotPasswordScreen } from "./ForgotPassword.screen";
import { RegisterScreen } from "./Register.screen";

export const AuthRouter: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={AuthScreen} />
      <Route path={`${match.url}/register`} component={RegisterScreen} />
      <Route
        path={`${match.url}/forgot-password`}
        component={ForgotPasswordScreen}
      />
    </IonRouterOutlet>
  );
};
