import { IonRippleEffect } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  children?: any;
}

export const RippleEffect: React.FC<IProps> = ({ children }) => {
  return (
    <RippleContainer className="ion-activatable ripple-parent">
      {children}
      <IonRippleEffect />
    </RippleContainer>
  );
};

const RippleContainer = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  padding: 0.1rem;
`;
