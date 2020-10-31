import { IonAlert } from '@ionic/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearAlert } from '../store/actions/alert.action';
import { StoreState } from '../store/reducers/index.reducer';
import { IAlert } from '../store/types/alert.types';

interface IProps {}

export const Alert: React.FC<IProps> = (props) => {
  const alert = useSelector<StoreState, IAlert>(
    ({ uiReducer }) => uiReducer.alert
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearAlert());
    }, 5000);
  }, [dispatch]);

  return (
    <IonAlert
      isOpen={alert.isOpen}
      onDidDismiss={() => {
        dispatch(clearAlert());
        if (alert.onDidDismiss) alert.onDidDismiss();
      }}
      // cssClass='my-custom-class'
      header={alert.title}
      subHeader={alert.subtitle}
      message={alert.message}
      buttons={alert.buttons}
    />
  );
};
