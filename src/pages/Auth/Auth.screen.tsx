import React from 'react';
import styled from 'styled-components';

import logoImg from '../../assets/images/logo.png';

interface IProps {}

export const AuthScreen: React.FC<IProps> = (props) => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logoImg} alt="Instituition Logo"></Logo>
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  background: var(--ion-color-secondary);
  background: linear-gradient(
    121deg,
    var(--ion-color-secondary) 0%,
    var(--ion-color-primary) 66%
  );
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Logo = styled.img`
  height: 110px;
`;

const LogoContainer = styled.div`
  max-width: 300px;
  margin-top: 2rem;
`;
