
const { test, chromium, expect } = require('@playwright/test');

test('My First Chromium Test', async () => {

    // 1. Launch Chromium Browser
    const browser = await chromium.launch({
        headless: false
    });

    // 2. Create Browser Context
    const context = await browser.newContext();

    // 3. Create Page
    const page = await context.newPage();

    // 4. Write Test Steps
    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle('Demo Web Shop');

    console.log('Title:', await page.title());

    // 5. Close Browser
    await browser.close();

});
test('Open two pages in Chromium Browser', async () => {

    // 1. Launch Chromium Browser
    const browser = await chromium.launch({
        headless: false
    });
    
    const context = await browser.newContext();

    // 2. Create Page 1
    const page1 = await context.newPage();
    await page1.goto('https://demowebshop.tricentis.com/');
    await expect(page1).toHaveTitle('Demo Web Shop');
    console.log('Page 1 Title:', await page1.title());

    // 3. Create Page 2
    const page2 = await context.newPage();
    await page2.goto('https://testautomationpractice.blogspot.com/');
    await expect(page2).toHaveTitle('Automation Testing Practice');
    console.log('Page 2 Title:', await page2.title());

    // 7. Verify Both Pages
    await expect(page1).toHaveTitle('Demo Web Shop');
    await expect(page2).toHaveTitle(/Automation Testing Practice/);

    // 8. Close Browser
    await browser.close();

});
test('Multiple Browser Contexts ', async () => {

     // 1. Launch Browser
    const browser = await chromium.launch({
    headless: process.env.CI ? true : false
});

    // 2. Create First Context
    const context1 = await browser.newContext();

    // 3. Create Second Context
    const context2 = await browser.newContext();

    // 4. Create Page in First Context
    const page1 = await context1.newPage();

    // 5. Create Page in Second Context
    const page2 = await context2.newPage();

    // 6. Open Website in First Context
    await page1.goto('https://demowebshop.tricentis.com/');

    // 7. Open Website in Second Context
    await page2.goto('https://www.google.com/');

    // 8. Verify Pages
    await expect(page1).toHaveTitle('Demo Web Shop');
    await expect(page2).toHaveTitle(/Google/);

    console.log('Page 1:', await page1.title());
    console.log('Page 2:', await page2.title());

    // 9. Close Browser
    await browser.close();

});
