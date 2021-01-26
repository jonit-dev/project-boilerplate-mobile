import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AuthenticatedPage } from "../../components/AuthenticatedPage";
import { FloatingInput } from "../../components/FloatingInput";
import { FormBody, FormPanel, FormTitle } from "../../components/FormPanel";
import { InternalPage } from "../../components/InternalPage";
import { Text } from "../../components/Text";
import { TS } from "../../libs/TranslationHelper";
import { ValidationHelper } from "../../libs/ValidationHelper";
import { showAlert } from "../../store/actions/alert.action";
import { toggleLoading } from "../../store/actions/loading.action";
import { userChangePassword } from "../../store/actions/user.action";
import { IChangePasswords } from "../../store/types/user.types";

export const ChangePasswordScreen: React.FC = () => {
  const [passwords, setPasswords] = useState<IChangePasswords>({
    currentPassword: "",
    newPassword: "",
  });

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const invalidFields = ValidationHelper.validateKeyValue(passwords, {
      fieldLabels: {
        currentPassword: TS.translate("form", "currentPassword"),
        newPassword: TS.translate("form", "newPassword"),
      },
    });
    if (invalidFields) {
      dispatch(
        showAlert(
          "Oops!",
          TS.translate("form", "emptyFieldsError", {
            invalidFields: invalidFields,
          })
        )
      );
      return;
    }
    await dispatch(toggleLoading(true, TS.translate("global", "waitMessage")));

    dispatch(
      userChangePassword({
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      })
    );
    await dispatch(toggleLoading(false));
  };

  return (
    <InternalPage title={TS.translate("auth", "changePassword")}>
      <AuthenticatedPage>
        <FormPanel>
          <FormTitle>{TS.translate("auth", "changePassword")}</FormTitle>

          <FormBody>
            <Text>{TS.translate("auth", "changePasswordInfoText")}</Text>
            <FloatingInput
              label={TS.translate("form", "currentPassword")}
              type="password"
              value={passwords.currentPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, currentPassword: e.target.value })
              }
            />
            <br />
            <FloatingInput
              label={TS.translate("form", "newPassword")}
              type="password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
            />
            <br />
            <IonButton expand="block" color="tertiary" onClick={onSubmit}>
              {TS.translate("form", "submit")}
            </IonButton>
          </FormBody>
        </FormPanel>
      </AuthenticatedPage>
    </InternalPage>
  );
};
