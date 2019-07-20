import fs from "fs";
import path from "path";
import { DataReader } from "./MatchReader";

export class CsvFileReader implements DataReader {
  data: Array<Array<string>> = [];

  constructor(public filename: string) {}

  read(): void {
    const filePath = path.resolve(__dirname, this.filename);
    const fileContent = fs.readFileSync(filePath).toString();
    this.data = fileContent.split("\n").map(row => {
      return row.split(",");
    });
  }
}
