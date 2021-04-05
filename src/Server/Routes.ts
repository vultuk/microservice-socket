import {Socket} from 'socket.io';

import {Route} from '../Types/Route';
import {SetupResults} from '../Types/SetupResults';

export default (routes: Route[]) => (setup: SetupResults): SetupResults => {
  const { settings, app }: SetupResults = setup;

  app.on('connection', (socket: Socket) => {
    routes.forEach((route: Route) => socket.on(route.action, (msg: any) => route.fn(msg, app)));
  });

  return { settings, app };
};
