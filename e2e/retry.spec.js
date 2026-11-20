const { test, expect } = require('@playwright/test');

test.describe('Retry Example', () => {

    test.describe.configure({ retries: 3 });

    test.skip('Retry Example', async ({ page }, testInfo) => {

        console.log('Execution number:', testInfo.retry + 1);

        if (testInfo.retry < 4) {

            expect(10).toBe(20);  // Fail first 2 attempts

        } else {

            expect(10).toBe(10);  // Pass on 3th attempt

        }

    });
    test.skip('Flaky Test Example', async ({ page }) => {

    const randomNumber = Math.random();

    console.log(randomNumber);

    expect(randomNumber).toBeGreaterThan(0.5);

});

});