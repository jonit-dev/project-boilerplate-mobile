import { IonPage } from '@ionic/react';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';

import logoImg from '../../assets/images/logo.png';
import { CustomButton } from '../../components/CustomButton';
import { Text } from '../../components/Text';
import { TransparentInput } from '../../components/TransparentInput';
import { appEnv } from '../../constants/env';
import { BackgroundContainer } from '../../shared/UI';

export const AuthScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onRegisterClick = (e) => {
    e.preventDefault();
    history.push("/auth/register");
  };
  return (
    <IonPage>
      <BackgroundContainer>
        <Container>
          <CenterContainer>
            <LogoContainer>
              <Logo src={logoImg} alt="Institution Logo"></Logo>
              <LogoSubtitle>
                Sign in to the {appEnv.institutionType}
              </LogoSubtitle>
            </LogoContainer>

            <FormContainer>
              <TransparentInput
                icon={mailOutline}
                type="email"
                placeholder={"Your e-mail"}
                onChange={(newValue) => setEmail(newValue)}
              />
              <TransparentInput
                icon={lockClosedOutline}
                type="text"
                placeholder={"Your password"}
                onChange={(newValue) => setPassword(newValue)}
              />
            </FormContainer>

            <CustomButton color="light" expand="full" link={"/main"}>
              Login
            </CustomButton>

            <TextContainer>
              <Text faded onClick={onRegisterClick}>
                Create your Account
              </Text>
              <Text faded>Forgot your password?</Text>
            </TextContainer>
          </CenterContainer>
        </Container>
      </BackgroundContainer>
    </IonPage>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CenterContainer = styled.div`
  width: 270px;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 110px;
  flex: 100%;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  max-height: 160px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex: 100%;
`;

const LogoSubtitle = styled.div`
  font-size: 1rem;
  color: white;
  flex: 100%;
`;

const FormContainer = styled.div`
  box-sizing: border-box;
  min-height: 150px;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

const TextContainer = styled.div`
  margin-top: 4rem;
  height: 130px;
`;
