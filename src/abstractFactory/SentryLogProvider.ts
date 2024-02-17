import { LogProvider } from '../interface/LogProvider';

export class SentryLoProvider extends LogProvider {
  public log(message: string) {
    console.log(`From Sentry: ${message}`);
  }
}
