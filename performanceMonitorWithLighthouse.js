import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { config } from "dotenv";
const environment = config('.env').parsed;
const url = environment.URL;
const numTests = environment.NUMBEROFTESTS;

async function runLighthouse(url, numTests) {
  const chrome = await launch({ chromeFlags: ["--headless"] });

  const options = {
    logLevel: "info",
    output: "json",
    onlyCategories: ["performance"],
    port: chrome.port,
  };

  let totalFCPScore = 0;
  let totalCLSScore = 0;

  for (let i = 0; i < numTests; i++) {
    const runnerResult = await lighthouse(url, options);

    const performanceScore = runnerResult.lhr.categories.performance.score;
    totalFCPScore +=
      performanceScore *
      runnerResult.lhr.audits["first-contentful-paint"].score;
    totalCLSScore +=
      performanceScore *
      runnerResult.lhr.audits["cumulative-layout-shift"].score;
  }

  const averageFCPScore = (totalFCPScore / numTests) * 100;
  const averageCLSScore = (totalCLSScore / numTests) * 100;

  console.log(`Average First Contentful Paint (FCP) score: ${averageFCPScore}`);
  console.log(
    `Average Cumulative Layout Shift (CLS) score: ${averageCLSScore}`
  );

  await chrome.kill();
}

runLighthouse(url, numTests);
