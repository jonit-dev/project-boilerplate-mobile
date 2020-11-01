import { appEnv } from '../constants/env';

export class RoutingHelper {
  public static redirect(route: string) {
    window.location.href = `${appEnv.appUrl}${route}`;
  }
}
