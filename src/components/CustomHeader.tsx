import { IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import history from '../pages/routing/history';
import { RippleEffect } from './RippleEffect';

interface IProps {
  title: string;
}

export const CustomHeader: React.FC<IProps> = ({ title }) => {
  const [canShowBackButton, setCanShowBackButton] = useState(false);

  useEffect(() => {
    if (history.action === "PUSH") {
      setCanShowBackButton(true);
    }
  }, []);

  const onClickBackButton = () => {
    history.goBack();
  };

  return (
    <Container>
      <StartSlot>
        {canShowBackButton && (
          <IconContainer onClick={onClickBackButton}>
            <RippleEffect>
              <IonIcon icon={arrowBackOutline} />
            </RippleEffect>
          </IconContainer>
        )}
      </StartSlot>

      <EndSlot></EndSlot>

      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: var(--ion-color-secondary);
  background: linear-gradient(
    133deg,
    var(--ion-color-secondary) 0%,
    var(--ion-color-tertiary-tint) 100%
  );
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1.3rem;
`;

const StartSlot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const EndSlot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  .ripple-parent {
    height: 28px;
  }

  ion-icon {
    font-size: 1.4rem;
    color: white;
  }
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
`;
