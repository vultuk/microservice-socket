import {Socket} from 'socket.io';

import {SetupResults} from '../Types/SetupResults';

export default (middleware?: any[]) => (setup: SetupResults): SetupResults => {
  const { settings, app }: SetupResults = setup;
  const wrap = (oldMiddleware: any) => (socket: Socket, next: any) => oldMiddleware(socket.request, {}, next);

  [...(middleware || [])].forEach((item) => app.use(wrap(item)));

  return { settings, app };
};
