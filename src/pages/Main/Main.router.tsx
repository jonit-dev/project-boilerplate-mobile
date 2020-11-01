import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router';

import { AuthenticatedPage } from '../../components/AuthenticatedPage';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export const MainPageRouter: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonReactRouter>
      <AuthenticatedPage>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={`${match.url}/tab1`} component={Tab1} exact={true} />
            <Route path={`${match.url}/tab2`} component={Tab2} exact={true} />
            <Route path={`${match.url}/tab3`} component={Tab3} />
            <Route
              path={match.url}
              render={() => <Redirect to={`${match.url}/tab1`} />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href={`${match.url}/tab1`}>
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href={`${match.url}/tab2`}>
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href={`${match.url}/tab3`}>
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </AuthenticatedPage>
    </IonReactRouter>
  );
};
