import { DB } from '../interface/DB';
import { EnvironmentFactory } from '../interface/EnvironmentFactory';
import { FS } from '../interface/FS';
import { LogProvider } from '../interface/LogProvider';

import { MysqlDB } from '../data/MysqlDB';
import { RealFS } from '../fileSystem/RealFS';
import { SentryLogProvider } from '../logProvider/SentryLogProvider';

export class ProdEnvironmentFactory extends EnvironmentFactory {
  public getDB(): DB {
    return new MysqlDB();
  }
  public getFS(): FS {
    return new RealFS();
  }
  public getLogProvider(): LogProvider {
    return new SentryLogProvider();
  }
}
