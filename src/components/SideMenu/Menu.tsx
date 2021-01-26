import "./Menu.css";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { flameOutline, flameSharp, personCircleOutline, personCircleSharp } from "ionicons/icons";
import React from "react";
import { useLocation } from "react-router-dom";

import { appEnv } from "../../constants/env";

interface IAppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: IAppPage[] = [
  {
    title: "Feed",
    url: "/main/Feed",
    iosIcon: flameOutline,
    mdIcon: flameSharp,
  },
  {
    title: "Settings",
    url: "/main/Settings",
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp,
  },
];

// const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{appEnv.institutionName}</IonListHeader>
          <IonNote>{appEnv.adminEmail}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
