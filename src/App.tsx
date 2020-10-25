import './assets/fonts/SFPro/stylesheet.css';
import './assets/styles/form-reset.css';
import './theme/variables.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import { IonApp } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

import { ShowLoading } from './components/ShowLoading';
import { RouterMiddleware } from './pages/router.middleware';

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
export const App: React.FC = () => {
  return (
    <IonApp>
      <GlobalStyles>
        <ShowLoading />
        <RouterMiddleware />
      </GlobalStyles>
    </IonApp>
  );
};

const GlobalStyles = styled.div`
  font-family: "SF Pro Display";
`;
