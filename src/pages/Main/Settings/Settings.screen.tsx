import { IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";

import { SideMenuPage } from "../../../components/SideMenu/SideMenuPage";

export const SettingsScreen: React.FC = () => {
  return (
    <SideMenuPage>
      <IonList>
        <IonItem routerLink="/main/settings/change-password">
          <IonLabel>Change Password</IonLabel>
        </IonItem>
      </IonList>
    </SideMenuPage>
  );
};
