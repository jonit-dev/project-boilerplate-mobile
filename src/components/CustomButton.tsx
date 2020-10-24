import { IonButton } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactElement | string;
  expand: "full" | "block" | undefined;
  color: string;
  onClick?: (e: any) => void;
  link?: string;
  routerDirection?: "back" | "forward" | "none";
}

export const CustomButton: React.FC<IProps> = ({
  expand,
  color,
  children,
  onClick,
  link,
  routerDirection,
}) => {
  return (
    <Container>
      <IonButton
        expand={expand}
        color={color}
        onClick={onClick}
        routerLink={link}
        routerDirection={routerDirection}
      >
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
