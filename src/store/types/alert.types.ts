export interface IAlert {
  isOpen: boolean;
  title: string;
  message: string;
  subtitle?: string;
  buttons?: string[];
  onDidDismiss?: () => void;
}

export enum AlertActionTypes {
  showAlert = "showAlert",
  clearAlert = "clearAlert",
}

export interface IDispatchAlertShow {
  type: AlertActionTypes.showAlert;
  payload: IAlert;
}

export interface IDispatchAlertClear {
  type: AlertActionTypes.clearAlert;
}

export type AlertAction = IDispatchAlertShow | IDispatchAlertClear;
