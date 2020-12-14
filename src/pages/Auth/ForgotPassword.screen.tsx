import { IonButton } from "@ionic/react";
import React, { useState } from "react";

import { FloatingInput } from "../../components/FloatingInput";
import { FormBody, FormPanel, FormTitle } from "../../components/FormPanel";
import { InternalPage } from "../../components/InternalPage";
import { Text } from "../../components/Text";
import { TS } from "../../libs/TranslationHelper";

export const ForgotPasswordScreen: React.FC = () => {
  const [recoveryEmail, setRecoveryEmail] = useState<string>("");

  const onSubmit = () => {};

  return (
    <InternalPage title={"Password Recovery"}>
      <FormPanel>
        <FormTitle>Forgot your Password?</FormTitle>

        <FormBody>
          <Text>
            Please, type the e-mail that you used to create you account below.
            We'll generate a new password and submit to you.
          </Text>
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
