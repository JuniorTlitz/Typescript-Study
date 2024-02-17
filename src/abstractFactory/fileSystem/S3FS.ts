import { FS } from '../interface/FS';

export class S3FS extends FS {
  public readFile(fileName: string) {
    console.log(`Reading file ${fileName} from S3`);
  }
}
