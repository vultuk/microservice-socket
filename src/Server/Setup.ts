import {Server} from 'socket.io';

import {Settings} from '../Types/Settings';
import {SetupResults} from '../Types/SetupResults';

export default (settings: Settings) => (): SetupResults => {
  const options: any = {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  };

  if (settings.path) {
    options['path'] = settings.path;
  }

  const app: Server = new Server();

  return { settings, app };
};
