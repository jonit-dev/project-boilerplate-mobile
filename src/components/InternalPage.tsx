import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { CustomHeader } from './CustomHeader';

interface IProps extends RouteComponentProps {
  title: string;
  children: React.ReactElement;
}

export const InternalPage: React.FC<IProps> = ({ title, children }) => {
  return (
    <Container>
      <IonPage>
        <IonHeader>
          <CustomHeader title={title} />
        </IonHeader>
        <IonContent className="ion-padding">{children}</IonContent>
      </IonPage>
    </Container>
  );
};

const Container = styled.div`
  ion-content::part(background) {
    background: var(--ion-color-internal-page-background);
  }
`;
