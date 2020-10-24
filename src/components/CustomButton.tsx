import { IonButton } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactElement | string;
  expand: "full" | "block" | undefined;
  color: string;
}

export const CustomButton: React.FC<IProps> = ({ expand, color, children }) => {
  return (
    <Container>
      <IonButton expand={expand} color={color}>
        {children}
      </IonButton>
    </Container>
  );
};

const Container = styled.div`
  ion-button::part(native) {
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    height: 2.7rem;
  }
`;
