import "./assets/fonts/SFPro/stylesheet.css";
import "./assets/styles/form-reset.css";
import "./theme/custom-colors.css";
import "./theme/variables.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";

import { IonApp } from "@ionic/react";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";

import { Alert } from "./components/Alert";
import { ShowLoading } from "./components/ShowLoading";
import { RouterMiddleware } from "./pages/routing/router.middleware";
import { persistor, store } from "./store/persist.store";

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IonApp>
          <GlobalStyles>
            <Alert />
            <ShowLoading />
            <RouterMiddleware />
          </GlobalStyles>
        </IonApp>
      </PersistGate>
    </Provider>
  );
};

const GlobalStyles = styled.div`
  font-family: "SF Pro Display";
`;
