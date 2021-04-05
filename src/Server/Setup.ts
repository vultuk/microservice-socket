import {Server} from 'socket.io';

import {Settings} from '../Types/Settings';
import {SetupResults} from '../Types/SetupResults';

export default (settings: Settings) => (): SetupResults => {
  const app: Server = new Server({
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  return { settings, app };
};
