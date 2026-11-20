const { test, expect } = require('@playwright/test');

let count = 0;

test('Retry Example', async ({ page }) => {

    count++;

    console.log('Execution number:', count);

    if (count <= 3) {
        expect(10).toBe(20);  // Fail
    }
    else {
        expect(10).toBe(10);  // Pass
    }

});