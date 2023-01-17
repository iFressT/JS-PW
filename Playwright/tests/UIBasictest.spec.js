const {test, webkit} = require('@playwright/test');


test ('Playwright first test',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.bilibili.tv/id");





});

test.only ('Playwright first tests',async ({page})=>{
    await page.goto("https://www.google.com/");

});