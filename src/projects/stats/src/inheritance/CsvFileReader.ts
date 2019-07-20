import fs from "fs";
import path from "path";

export abstract class CsvFileReader<T> {
  data: Array<T> = [];

  protected constructor(public filename: string) {}

  read(): void {
    const filePath = path.resolve(__dirname, this.filename);
    const fileContent = fs.readFileSync(filePath).toString();
    this.data = fileContent
      .split("\n")
      .map(row => {
        return row.split(",");
      })
      .map(this.mapRow);
  }

  abstract mapRow(row: Array<string>): T;
}
