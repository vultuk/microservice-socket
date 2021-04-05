import {Server} from 'socket.io';

import {Settings} from '../Types/Settings';

export type SetupResults = { settings: Settings; app: Server };
