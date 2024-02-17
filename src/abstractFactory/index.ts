import { DevEnvironmentFactory } from './env/DevEnvironmentFactory';
import { ProdEnvironmentFactory } from './env/ProdEnvironmentFactory';
import { EnvironmentFactory } from './interface/EnvironmentFactory';

function client(environmentFactory: EnvironmentFactory) {
  const db = environmentFactory.getDB();
  db.connect();

  const fs = environmentFactory.getFS();
  fs.readFile('document.txt');

  const logProvider = environmentFactory.getLogProvider();
  logProvider.log('Hello world');
}

if (process.env.NODE_ENV === 'prd') {
  client(new ProdEnvironmentFactory());
} else {
  client(new DevEnvironmentFactory());
}
