import React from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from '../store/reducers/index.reducer';
import { IUser } from '../store/types/user.types';
import { AuthScreen } from './Auth/Auth.screen';
import { MainScreen } from './Main/Main.screen';

interface IProps {}

export const RoutesMiddleware: React.FC<IProps> = (props) => {
  // This component is responsible for deciding if the user needs to logout or if he can just bypass login and go directly to MainScreen

  const user = useSelector<StoreState, IUser>(
    ({ userReducer }) => userReducer.user
  );

  return user.isLoggedIn ? <MainScreen /> : <AuthScreen />;
};
