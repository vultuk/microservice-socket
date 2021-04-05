import {SetupResults} from '../Types/SetupResults';

export default (setup: SetupResults): SetupResults => {
  const { settings, app }: SetupResults = setup;

  app.listen(settings.port || 3000);
  console.log(`Websocket running on port ${settings.port || 3000}`);

  return { settings, app };
};
