import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  print(result: string): void {
    console.log(result);
  }
}
