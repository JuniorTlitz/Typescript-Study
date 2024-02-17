import { DB } from './DB';
import { FS } from './FS';
import { LogProvider } from './LogProvider';

export abstract class EnvironmentFactory {
  public abstract getDB(): DB;
  public abstract getFS(): FS;
  public abstract getLogProvider(): LogProvider;
}
