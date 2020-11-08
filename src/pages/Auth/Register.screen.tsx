import { IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FloatingInput } from '../../components/FloatingInput';
import { FloatingInputMask } from '../../components/FloatingInputMask';
import { FormBody, FormPanel, FormTitle } from '../../components/FormPanel';
import { InternalPage } from '../../components/InternalPage';
import { ValidationHelper } from '../../libs/ValidationHelper';
import { showAlert } from '../../store/actions/alert.action';
import { INewUser } from '../../store/types/user.types';

export const RegisterScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<INewUser>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const onInputChange = (e, key: string) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log(user);

    // Front-end validation ========================================

    const invalidFields = ValidationHelper.validateKeyValue(
      {
        ...user,
      },
      {
        optionalFields: [],
        fieldLabels: {
          name: "Name",
          email: "E-mail",
          password: "Password",
          address: "Address",
          phone: "Phone",
        },
      }
    );

    if (invalidFields) {
      dispatch(
        showAlert("Oops!", `The following fields are empty: ${invalidFields}`)
      );
    }

    console.log("Submitting user register request...");
  };

  return (
    <InternalPage title={"Register"}>
      <FormPanel>
        <FormTitle>Create Your Account</FormTitle>
        <FormBody>
          <FloatingInput
            label="Name"
            type="text"
            value={user.name}
            onChange={(e) => onInputChange(e, "name")}
          />

          <FloatingInput
            label="E-mail"
            type="text"
            value={user.email}
            onChange={(e) => onInputChange(e, "email")}
          />

          <FloatingInput
            label="Password"
            type="password"
            value={user.password}
            onChange={(e) => onInputChange(e, "password")}
          />

          <FloatingInput
            label="Address"
            type="text"
            value={user.address}
            onChange={(e) => onInputChange(e, "address")}
          />

          <FloatingInputMask
            label="Phone"
            type="tel"
            mask={"(000) 000-0000"}
            value={user.phone}
            onChange={(e) => onInputChange(e, "phone")}
          />

          <br />
          <IonButton expand="block" color="tertiary" onClick={onSubmit}>
            Submit
          </IonButton>
        </FormBody>
      </FormPanel>
    </InternalPage>
  );
};
