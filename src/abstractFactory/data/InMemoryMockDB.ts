import { DB } from '../../interface/DB';

export class InMemoryMockDB extends DB {
  public connect() {
    console.log('Mocking DB in memory');
  }
}
