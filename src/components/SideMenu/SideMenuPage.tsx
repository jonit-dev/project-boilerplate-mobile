import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { TextHelper } from "@project-boilerplate/shared/dist";
import React from "react";
import { useParams } from "react-router";

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

export const SideMenuPage: React.FC<IProps> = ({ children, title }) => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {TextHelper.capitalizeFirstLetter(name || title!)}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {TextHelper.capitalizeFirstLetter(name || title!)}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
};
