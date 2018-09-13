const puppetteer = require("puppeteer");

/**
 * @param {string} pageUrl The URL that you want to gather coverage data for
 */
const unusedCode = async pageUrl => {
  const browser = await puppetteer.launch();
  console.log("browser launched");
  const page = await browser.newPage();
  console.log("new page created");
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);
  console.log("coverage started");
  await page.goto(pageUrl);
  console.log("navigated to", pageUrl);
  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);
  console.log("coverage recieved");
  return [...jsCoverage, ...cssCoverage];
};
const url= "https://photo-pieces.netlify.com";
unusedCode(url).then(coverage => console.log(coverage)).catch(e=>console.Error(e));