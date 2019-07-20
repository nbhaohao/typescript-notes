import { MatchRow } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: Array<MatchRow>): string;
}
export interface OutputTarget {
  print(result: string): void;
}

export class Summary {
  // 快捷方式
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: Array<MatchRow>): void {
    const result = this.analyzer.run(matches);
    this.outputTarget.print(result);
  }
}
