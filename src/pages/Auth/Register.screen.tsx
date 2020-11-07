import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FormBody, FormPanel, FormTitle } from '../../components/FormPanel';
import { InternalPage } from '../../components/InternalPage';
import { INewUser } from '../../store/types/user.types';

interface IProps extends RouteComponentProps {}

export const RegisterScreen: React.FC<IProps> = (props) => {
  const [user, setUser] = useState<INewUser>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const onInputChange = (e: CustomEvent, key: string) => {
    setUser({
      ...user,
      [key]: e.detail.value,
    });
  };

  const onSubmit = () => {
    console.log(user);
  };

  return (
    <InternalPage title={"Register"} {...props}>
      <FormPanel>
        <FormTitle>Create Your Account</FormTitle>
        <FormBody>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput
                type="text"
                value={user.name}
                onIonChange={(e) => onInputChange(e, "name")}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">E-mail</IonLabel>
              <IonInput
                type="email"
                value={user.email}
                onIonChange={(e) => onInputChange(e, "email")}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={user.password}
                onIonChange={(e) => onInputChange(e, "password")}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Address</IonLabel>
              <IonInput
                type="text"
                value={user.address}
                onIonChange={(e) => onInputChange(e, "address")}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Phone</IonLabel>
              <IonInput
                type="tel"
                value={user.phone}
                onIonChange={(e) => onInputChange(e, "phone")}
              ></IonInput>
            </IonItem>
          </IonList>
          <br />
          <IonButton expand="block" color="tertiary" onClick={onSubmit}>
            Submit
          </IonButton>
        </FormBody>
      </FormPanel>
    </InternalPage>
  );
};
