import Middleware from './Server/Middleware';
import Routes from './Server/Routes';
import Serve from './Server/Serve';
import Setup from './Server/Setup';
import lodash from './Shared/Lodash';
import {Route} from './Types/Route';
import {Settings} from './Types/Settings';

export * from './Types';
export const _ = lodash;

export const Microservice = (settings?: Settings) => (middleware?: any[]) => (routes: Route[]) =>
  _.pipe(Setup(settings || {}), Middleware(middleware), Routes(routes), Serve);
