import {Server} from 'socket.io';

import {Microservice} from '.';

Microservice({ port: 3000 })([])(
  // Middleware
  [
    {
      action: 'test',
      fn: async (msg: any, app: Server) => {
        console.log('Activated Test');
        app.emit('Test1');
      },
    },
    {
      action: 'test2',
      fn: async () => {
        console.log('Activated Test 2');
      },
    },
  ],
)();
