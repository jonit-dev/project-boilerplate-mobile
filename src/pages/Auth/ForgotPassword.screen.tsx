import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FloatingInput } from "../../components/FloatingInput";
import { FormBody, FormPanel, FormTitle } from "../../components/FormPanel";
import { InternalPage } from "../../components/InternalPage";
import { Text } from "../../components/Text";
import { TS } from "../../libs/TranslationHelper";
import { showAlert } from "../../store/actions/alert.action";
import { toggleLoading } from "../../store/actions/loading.action";
import { userForgotPassword } from "../../store/actions/user.action";

export const ForgotPasswordScreen: React.FC = () => {
  const [recoveryEmail, setRecoveryEmail] = useState<string>("");

  const dispatch = useDispatch();

  const onSubmit = async () => {
    if (!recoveryEmail) {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("validation", "isNotEmpty", { field: "E-mail" })
        )
      );
      return;
    }

    console.log("Submitting password recovery request");

    await dispatch(toggleLoading(true, TS.translate("global", "waitMessage")));

    await dispatch(userForgotPassword(recoveryEmail));

    await dispatch(toggleLoading(false));
  };

  return (
    <InternalPage title={TS.translate("auth", "passwordRecovery")}>
      <FormPanel>
        <FormTitle>{TS.translate("auth", "forgotYourPassword")}</FormTitle>

        <FormBody>
          <Text>{TS.translate("auth", "forgotPasswordText")}</Text>
          <FloatingInput
            label={TS.translate("form", "email")}
            type="text"
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
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
