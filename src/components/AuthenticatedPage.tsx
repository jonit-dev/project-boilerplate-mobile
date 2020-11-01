import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from '../pages/routing/history';
import { showAlert } from '../store/actions/alert.action';
import { userInfoRefresh } from '../store/actions/user.action';
import { StoreState } from '../store/reducers/index.reducer';
import { IUser } from '../store/types/user.types';

interface IProps {
  children: any;
}

export const AuthenticatedPage: React.FC<IProps> = ({ children }) => {
  const user = useSelector<StoreState, IUser>(
    ({ userReducer }) => userReducer.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfoRefresh());

    if (!user.isLoggedIn) {
      dispatch(showAlert("Oops!", `Please, login before accessing this page.`));
      history.push("/auth");
    }
  }, [dispatch, user.isLoggedIn]);

  return children;
};
