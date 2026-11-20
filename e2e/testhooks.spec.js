import { test, expect } from '@playwright/test'

test.describe('Test Hooks', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
    });

    test('Verify Books menu', async ({ page }) => {
        await page.locator('.top-menu a[href="/books"]').click();
        await expect(page).toHaveURL(/books/);
    });
    test('Verify Computers menu', async ({ page }) => {
        await page.locator('.top-menu a[href="/computers"]').click();
        await expect(page).toHaveURL(/computers/);
    });
    test('Verify Desktops submenu', async ({ page }) => {
        await page.locator('.top-menu a[href="/computers"]').hover();
        await page.locator("//ul[@class='top-menu']//a[normalize-space()='Desktops']").click();
        await expect(page).toHaveURL(/desktops/);
    });
    test('Verify Notebooks submenu', async ({ page }) => {
        await page.locator('.top-menu a[href="/computers"]').hover();
        await page.locator("//ul[@class='top-menu']//a[normalize-space()='Notebooks']").click();
        await expect(page).toHaveURL(/notebooks/);
    });

});
