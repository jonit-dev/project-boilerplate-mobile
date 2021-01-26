import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { userInfoRefresh } from "../../store/actions/user.action";
import { StoreState } from "../../store/reducers/index.reducer";
import { IUser } from "../../store/types/user.types";
import { AuthRouter } from "../Auth/Auth.router";
import { MainPageRouter } from "../Main/Main.router";
import history from "./history";

export const RouterMiddleware: React.FC = () => {
  // This component is responsible for deciding if the user needs to logout or if he can just bypass login and go directly to MainScreen

  const user = useSelector<StoreState, IUser>(
    ({ userReducer }) => userReducer.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // IF we have an user token to actually refresh some info from...
    if (user.token) {
      console.log("Refreshing user info");
      dispatch(userInfoRefresh());
    }
  }, [dispatch, user.token]);

  const onRouteRedirect = () => (
    <Redirect to={user.isLoggedIn ? "/main" : "/auth"} />
  );

  return (
    <IonReactRouter history={history}>
      <IonRouterOutlet>
        <Switch>
          <Route
            path="/main"
            render={(props) => <MainPageRouter {...props} />}
          />
          <Route path="/auth" render={(props) => <AuthRouter {...props} />} />
          <Route exact path="/" render={onRouteRedirect} />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
