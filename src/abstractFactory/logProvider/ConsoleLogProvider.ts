import { LogProvider } from '../interface/LogProvider';

export class ConsoleLogProvider extends LogProvider {
  public log(message: string) {
    console.log(`From console: ${message}`);
  }
}
