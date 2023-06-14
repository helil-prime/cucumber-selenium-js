import { Given, When, Then } from "@cucumber/cucumber";
import { By } from "selenium-webdriver";
import chai = require('chai');
import { assert } from "chai";
       
         Given('As a user, I am on the login page', async function () {
            await global.mydriver.get("http://crater.primetech-apps.com/login");
            let loginbtn = await global.mydriver.findElement(By.xpath("//button[text()='Login']")).isDisplayed()
            assert.isTrue(loginbtn);
         });
       
       
         When('I enter valid username and valid password', async function () {
        const username = await global.mydriver.findElement(By.name('email'));
        await global.mydriver.actions()
        .move({ origin: username })
        .pause(500)
        .press()
        .pause(500)
        .sendKeys('entityadmin@primetechschool.com')
        .perform();
           
        const password = await global.mydriver.findElement(By.name('password'));
        await global.mydriver.actions()
        .move({ origin: password })
        .pause(500)
        .press()
        .pause(500)
        .sendKeys('primetech@school')
        .perform();

        assert.fail();
           
         });
       
       
         When('I click on login button', async function () {
            await global.mydriver.findElement(By.xpath("//button[text()='Login']")).click();
         });

       
         Then('I should be on user profile page', async function () {
            let accountTextDisplayed = 
            await global.mydriver.findElement(By.xpath("//h6[text()='Account Settings']")).isDisplayed();
            assert.isTrue(accountTextDisplayed);

            let text = await global.mydriver.findElement(By.xpath("//h6[text()='Account Settings']")).getText();
            console.log(text);
            assert.strictEqual('Account Settings', text);
         });