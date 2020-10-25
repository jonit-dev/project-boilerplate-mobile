import { IonLoading } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleLoading } from '../store/actions/loading.action';
import { StoreState } from '../store/reducers/index.reducer';
import { ILoadingData } from '../store/types/loading.types';

export const ShowLoading: React.FC = () => {
  const dispatch = useDispatch();

  const { isActive, message } = useSelector<StoreState, ILoadingData>(
    (state) => state.loadingReducer
  );

  return (
    <IonLoading
      isOpen={isActive}
      onDidDismiss={() => dispatch(toggleLoading(false, null))}
      message={message!}
      duration={5000}
    />
  );
};
