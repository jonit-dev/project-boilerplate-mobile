import history from '../pages/history';

export class RoutingHelper {
  public static redirect(route: string) {
    history.push(route);
  }
}
