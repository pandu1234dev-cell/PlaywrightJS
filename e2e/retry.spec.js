const { test, expect } = require('@playwright/test');

test.describe('Retry Example', () => {

    test.describe.configure({ retries: 2 });

    test('Retry Example', async ({ page }, testInfo) => {

        console.log('Execution number:', testInfo.retry + 1);

        if (testInfo.retry < 3) {

            expect(10).toBe(20);  // Fail first 2 attempts

        } else {

            expect(10).toBe(10);  // Pass on 3th attempt

        }

    });

});