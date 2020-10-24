import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { StoreState } from '../store/reducers/index.reducer';
import { IUser } from '../store/types/user.types';

interface IProps extends RouteComponentProps {
  title: string;
  children: React.ReactElement;
  authRequired?: boolean;
}

export const InternalPage: React.FC<IProps> = ({
  title,
  children,
  authRequired = true,
  history,
}) => {
  const user = useSelector<StoreState, IUser>(
    ({ userReducer }) => userReducer.user
  );

  const [canMount, setCanMount] = useState<boolean>(false);

  useEffect(() => {
    if (!user.isLoggedIn && authRequired) {
      console.log(
        `You're accessing an authentication protected page (${title}) without being logged in. Redirecting to authentication... `
      );
      history.push("/auth");
    } else {
      setCanMount(true);
    }
  }, [authRequired, history, title, user.isLoggedIn]);

  return canMount ? (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{children}</IonContent>
    </IonPage>
  ) : null;
};
