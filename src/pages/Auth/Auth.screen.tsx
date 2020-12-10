import { IonIcon, IonPage } from "@ionic/react";
import { lockClosedOutline, logoGoogle, mailOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components/macro";

import { BackgroundContainer } from "../../common/UI";
import { CustomButton } from "../../components/CustomButton";
import { Text } from "../../components/Text";
import { TransparentInput } from "../../components/TransparentInput";
import { appEnv } from "../../constants/env";
import { OAuthHelper } from "../../libs/OAuthHelper";
import { RoutingHelper } from "../../libs/RoutingHelper";
import { TS } from "../../libs/TranslationHelper";
import { showAlert } from "../../store/actions/alert.action";
import { toggleLoading } from "../../store/actions/loading.action";
import { userLogin } from "../../store/actions/user.action";
import { IUserCredentials, UserActionTypes } from "../../store/types/user.types";

export const AuthScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logoImg = require(`../../assets/images/${appEnv.institutionLogo}`);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      //* Handle OAuth callbacks

      if (window.location.href.includes("accessToken")) {
        const urlParams = new URLSearchParams(window.location.search);

        const accessToken = urlParams.get("accessToken");

        await dispatch(
          toggleLoading(true, TS.translate("global", "waitMessage"))
        );

        await dispatch({
          type: UserActionTypes.login,
          payload: { accessToken },
        });

        RoutingHelper.redirect("/main");

        await dispatch(toggleLoading(false));
      }
    })();
  }, [dispatch]);

  const onRegisterClick = (e) => {
    e.preventDefault();

    history.push("/auth/register");
  };

  const onLogin = async () => {
    // Basic validation ========================================

    if (!email || !password) {
      return dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("auth", "emptyEmailPassword")
        )
      );
    }

    // Login ========================================

    await dispatch(toggleLoading(true, TS.translate("global", "waitMessage")));

    const credentials: IUserCredentials = {
      email,
      password,
    };

    await dispatch(userLogin(credentials));

    await dispatch(toggleLoading(false));

    console.log("Logging in user...");
  };

  const onSignInGoogle = async () => {
    const googleOAuthUrl = await OAuthHelper.getGoogleOAuthUrl();

    if (!googleOAuthUrl) {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("auth", "oauthLoginError")
        )
      );

      return;
    }

    // if everything is allright, lets just redirect the user to our OAuth login
    window.location.href = googleOAuthUrl;
  };

  return (
    <IonPage>
      <BackgroundContainer>
        <Container>
          <CenterContainer>
            <LogoContainer>
              <Logo src={logoImg} alt="Institution Logo"></Logo>
              <LogoSubtitle>{appEnv.institutionName}</LogoSubtitle>
            </LogoContainer>

            <FormContainer>
              <TransparentInput
                icon={mailOutline}
                type="email"
                placeholder={TS.translate("auth", "formInputEmailPlaceholder")}
                onChange={(newValue) => setEmail(newValue)}
              />
              <TransparentInput
                icon={lockClosedOutline}
                type="password"
                placeholder={TS.translate(
                  "auth",
                  "formInputPasswordPlaceholder"
                )}
                onChange={(newValue) => setPassword(newValue)}
              />
            </FormContainer>

            <CustomButton color="light" expand="full" onClick={onLogin}>
              {TS.translate("auth", "login")}
            </CustomButton>

            <br />

            <CustomButton
              color="google"
              textColor="white"
              expand="full"
              onClick={onSignInGoogle}
              iconSlot="start"
              icon={<IonIcon icon={logoGoogle} />}
            >
              {TS.translate("auth", "signInWithGoogle")}
            </CustomButton>

            <TextContainer>
              <Text faded onClick={onRegisterClick}>
                {TS.translate("auth", "createYourAccount")}
              </Text>
              {/* <Text faded>
                {TranslationHelper.get(
                  Entities.Auth,
                  AuthTranslationKeys.ForgotPassword
                )}
              </Text> */}
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
  padding-bottom: 1rem;
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
