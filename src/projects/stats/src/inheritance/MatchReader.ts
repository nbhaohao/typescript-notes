import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../util";
import { MatchResult } from "../MatchResult";

export type MatchRow = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReader extends CsvFileReader<MatchRow> {
  constructor(fileName: string) {
    super(fileName);
  }

  mapRow(row: Array<string>): MatchRow {
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
}
