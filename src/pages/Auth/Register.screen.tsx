import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FormBody, FormPanel, FormTitle } from '../../components/FormPanel';
import { InternalPage } from '../../components/InternalPage';

interface IProps extends RouteComponentProps {}

export const RegisterScreen: React.FC<IProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onInputChange = (e: CustomEvent, changeFunction: Function) => {
    changeFunction(e.detail.value);
  };

  const onSubmit = () => {
    const newUser = {
      name,
      email,
      password,
    };

    console.log(newUser);
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
                value={name}
                onIonChange={(e) => onInputChange(e, setName)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">E-mail</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => onInputChange(e, setEmail)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => onInputChange(e, setPassword)}
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
