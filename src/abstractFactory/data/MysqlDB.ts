import { DB } from '../interface/DB';

export class MysqlDB extends DB {
  public connect() {
    console.log('Connected to Mysql');
  }
}
