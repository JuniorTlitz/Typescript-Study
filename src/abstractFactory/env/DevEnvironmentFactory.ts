import { EnvironmentFactory } from '../interface/EnvironmentFactory';
import { DB } from '../interface/DB';
import { FS } from '../interface/FS';
import { LogProvider } from '../interface/LogProvider';
import { InMemoryMockDB } from '../data/InMemoryMockDB';
import { RealFS } from '../fileSystem/RealFS';
import { ConsoleLogProvider } from '../logProvider/ConsoleLogProvider';

export class DevEnvironmentFactory extends EnvironmentFactory {
  public getDB(): DB {
    return new InMemoryMockDB();
  }
  public getFS(): FS {
    return new RealFS();
  }
  public getLogProvider(): LogProvider {
    return new ConsoleLogProvider();
  }
}
