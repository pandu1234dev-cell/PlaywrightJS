import { test, expect } from '@playwright/test'

test.describe('Test Hooks', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
    });

    test('Verify Books menu', async ({ page }) => {
        await page.locator('.top-menu a[href="/books"]').click();
        await expect(page).toHaveURL(/books/);
    });

});
