import { Before, After } from "@cucumber/cucumber";
import * as fs from "fs";
import { Builder } from "selenium-webdriver";

Before( async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    global.mydriver = driver;
    await global.mydriver.manage().window().maximize();
    await global.mydriver.manage().setTimeouts( { implicit: 5000 } );
})


After( async function(scenario) {
 const scenarioStatus = scenario.result?.status;
 if(scenarioStatus === "FAILED") {
   global.mydriver.takeScreenshot().then(
    (image) => {
        fs.writeFileSync(`./tests/test-results/screenshots/failed.png`, 'image', 'base64');
    }
   )}
    global.mydriver.quit();
})