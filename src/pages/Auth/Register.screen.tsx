import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FloatingInput } from "../../components/FloatingInput";
import { FloatingInputMask } from "../../components/FloatingInputMask";
import { FormBody, FormPanel, FormTitle } from "../../components/FormPanel";
import { InternalPage } from "../../components/InternalPage";
import { TS } from "../../libs/TranslationHelper";
import { ValidationHelper } from "../../libs/ValidationHelper";
import { showAlert } from "../../store/actions/alert.action";
import { userRegister } from "../../store/actions/user.action";
import { INewUser } from "../../store/types/user.types";

export const RegisterScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<INewUser>({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
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
        fieldLabels: {
          name: TS.translate("form", "name"),
          email: TS.translate("form", "email"),
          password: TS.translate("form", "password"),
          passwordConfirmation: TS.translate("form", "passwordConfirmation"),
          address: TS.translate("form", "address"),
          phone: TS.translate("form", "password"),
        },
      }
    );

    if (invalidFields) {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          `The following fields are empty: ${invalidFields}`
        )
      );
    }

    // Add +1 number prefix to phone if needed, otherwise an invalid phone number error will be throw!
    if (!user.phone.includes("+1")) {
      user.phone = `+1 ${user.phone}`;
    }

    console.log("Submitting user register request...");

    dispatch(userRegister(user));
  };

  return (
    <InternalPage title={TS.translate("auth", "register")}>
      <FormPanel>
        <FormTitle>{TS.translate("auth", "createYourAccount")}</FormTitle>
        <FormBody>
          <FloatingInput
            label={TS.translate("form", "name")}
            type="text"
            value={user.name}
            onChange={(e) => onInputChange(e, "name")}
          />

          <FloatingInput
            label={TS.translate("form", "email")}
            type="text"
            value={user.email}
            onChange={(e) => onInputChange(e, "email")}
          />

          <FloatingInput
            label={TS.translate("form", "password")}
            type="password"
            value={user.password}
            onChange={(e) => onInputChange(e, "password")}
          />
          <FloatingInput
            label={TS.translate("form", "passwordConfirmation")}
            type="password"
            value={user.passwordConfirmation}
            onChange={(e) => onInputChange(e, "passwordConfirmation")}
          />

          <FloatingInput
            label={TS.translate("form", "address")}
            type="text"
            value={user.address}
            onChange={(e) => onInputChange(e, "address")}
          />

          <FloatingInputMask
            label={TS.translate("form", "phone")}
            type="tel"
            mask={"(000) 000-0000"}
            value={user.phone}
            onChange={(e) => onInputChange(e, "phone")}
          />

          <br />
          <IonButton expand="block" color="tertiary" onClick={onSubmit}>
            {TS.translate("form", "submit")}
          </IonButton>
        </FormBody>
      </FormPanel>
    </InternalPage>
  );
};
