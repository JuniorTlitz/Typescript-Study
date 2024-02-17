import { LogProvider } from '../interface/LogProvider';

export class SentryLogProvider extends LogProvider {
  public log(message: string) {
    console.log(`From Sentry: ${message}`);
  }
}
