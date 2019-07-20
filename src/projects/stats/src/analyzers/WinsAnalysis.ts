import { Analyzer } from "../Summary";
import { MatchRow } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  findTeamWinCounts(matches: Array<MatchRow>) {
    let counts = 0;
    matches.forEach(match => {
      const [, homeTeamName, arrayTeamName, , , result] = match;
      const asHomeTeamWin =
        homeTeamName === this.teamName && result === MatchResult.HOME_TEAM_WIN;
      const asArrayTeamWin =
        arrayTeamName === this.teamName &&
        result === MatchResult.ARRAY_TEAM_WIN;
      asHomeTeamWin || asArrayTeamWin ? (counts += 1) : null;
    });
    return counts;
  }
  run(matches: Array<MatchRow>): string {
    const winCounts = this.findTeamWinCounts(matches);
    return `Team ${this.teamName} won ${winCounts} games`;
  }
}
