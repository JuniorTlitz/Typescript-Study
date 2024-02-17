import { FS } from '../interface/FS';

export class RealFS extends FS {
  public readFile(fileName: string) {
    console.log(`Reading file ${fileName} from a real FS`);
  }
}
