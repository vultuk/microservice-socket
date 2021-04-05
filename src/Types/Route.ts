import {Server} from 'socket.io';

export type Route = {
  action: string;
  fn: (() => Promise<void>) | ((msg: any) => Promise<void>) | ((msg: any, app: Server) => Promise<void>);
};
