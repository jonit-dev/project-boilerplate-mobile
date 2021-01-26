import { IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";

import { SideMenuPage } from "../../../components/SideMenu/SideMenuPage";
import { RoutingHelper } from "../../../libs/RoutingHelper";
import { userClear } from "../../../store/actions/user.action";

export const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const onUserLogout = () => {
    dispatch(userClear());

    RoutingHelper.redirect("/auth");
  };

  return (
    <SideMenuPage>
      <IonList>
        <IonItem
          routerLink="/main/settings/change-password"
          routerDirection="root"
          detail
        >
          <IonLabel>Change Password</IonLabel>
        </IonItem>
        <IonItem detail onClick={onUserLogout}>
          <IonLabel>Logout</IonLabel>
        </IonItem>
      </IonList>
    </SideMenuPage>
  );
};
