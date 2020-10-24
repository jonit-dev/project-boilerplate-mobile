import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { StoreState } from '../store/reducers/index.reducer';
import { IUser } from '../store/types/user.types';
import { AuthRouter } from './Auth/Auth.router';
import { MainPageRouter } from './Main/Main.router';

interface IProps {}

export const RouterMiddleware: React.FC<IProps> = (props) => {
  // This component is responsible for deciding if the user needs to logout or if he can just bypass login and go directly to MainScreen

  const user = useSelector<StoreState, IUser>(
    ({ userReducer }) => userReducer.user
  );

  const onRouteRedirect = () => (
    <Redirect to={user.isLoggedIn ? "/main" : "/auth"} />
  );

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/main" render={(props) => <MainPageRouter {...props} />} />
        <Route path="/auth" render={(props) => <AuthRouter {...props} />} />
        <Route exact path="/" render={onRouteRedirect} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
