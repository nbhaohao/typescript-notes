import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";
import { MatchRow } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: Array<MatchRow> = [];
  static createCsvFileReader(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: Array<string>): MatchRow => {
        const [
          date,
          homeTeam,
          arrayTeam,
          homeScore,
          arrayScore,
          matchResult,
          referee
        ] = row;
        return [
          dateStringToDate(date),
          homeTeam,
          arrayTeam,
          Number(homeScore),
          Number(arrayScore),
          matchResult as MatchResult,
          referee
        ];
      }
    );
  }
}
