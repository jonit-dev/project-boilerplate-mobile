import { AlertActionTypes, IAlert, IDispatchAlertClear, IDispatchAlertShow } from '../types/alert.types';

export const showAlert = (
  title: string,
  message: string,
  buttons: string[] = ["Ok"],
  subtitle?: string,
  onDidDismiss?: () => void
): IDispatchAlertShow => {
  const alert: IAlert = {
    isOpen: true,
    title,
    message,
    subtitle,
    buttons,
    onDidDismiss,
  };

  return {
    type: AlertActionTypes.showAlert,
    payload: alert,
  };
};

export const clearAlert = (): IDispatchAlertClear => {
  return {
    type: AlertActionTypes.clearAlert,
  };
};
