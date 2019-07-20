import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const __main = () => {
  const matchReader = MatchReader.createCsvFileReader("football.csv");
  matchReader.load();
  // const winsAnalysis = new WinsAnalysis("Man United");
  // const consoleReport = new ConsoleReport();
  // const htmlReport = new HtmlReport();
  // const summary = new Summary(winsAnalysis, htmlReport);
  // summary.buildAndPrintReport(matchReader.matches);
  const quickSummary = Summary.winsAnalysisWithHtmlReport("Man United");
  quickSummary.buildAndPrintReport(matchReader.matches);
};

__main();
