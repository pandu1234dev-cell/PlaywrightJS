const { test, expect } = require('@playwright/test');

// TC01 - Verify Books menu
test.skip('Verify Books menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/books"]').click();

    await expect(page).toHaveURL(/books/);
});

// verify Computers menu
test.skip('Verify Computers menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('.top-menu a[href="/computers"]').click();
    await expect(page).toHaveURL(/computers/);
});

// TC03 - Verify Desktops submenu
test.skip('Verify Desktops submenu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/computers"]').hover();
    await page.locator("//ul[@class='top-menu']//a[normalize-space()='Desktops']").click();
    await expect(page).toHaveURL(/desktops/);

    await expect(page).toHaveURL(/desktops/);
});
// TC04 - Verify Notebooks submenu
test.skip('Verify Notebooks submenu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/computers"]').hover();
    await page.locator("//ul[@class='top-menu']//a[normalize-space()='Notebooks']").click();
    await expect(page).toHaveURL(/notebooks/);
});
// TC05 - Verify Accessories submenu
test.skip('Verify Accessories submenu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/computers"]').hover();
    await page.locator("//ul[@class='top-menu']//a[normalize-space()='Accessories']").click();
    await expect(page).toHaveURL(/accessories/);
});

// TC06 - Verify Electronics menu
test.skip('Verify Electronics menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/electronics"]').click();

    await expect(page).toHaveURL(/electronics/);
});

// TC07 - Verify Camera, photo submenu
test.skip('Verify Camera photo submenu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/electronics"]').hover();

    await page.locator('.sublist a[href="/camera-photo"]').click();

    await expect(page).toHaveURL(/camera-photo/);
});

// TC08 - Verify Cell phones submenu
test.skip('Verify Cell phones submenu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/electronics"]').hover();

    await page.locator('.sublist a[href="/cell-phones"]').click();

    await expect(page).toHaveURL(/cell-phones/);
});

// TC09 - Verify Apparel & Shoes menu
test.skip('Verify Apparel and Shoes menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/apparel-shoes"]').click();

    await expect(page).toHaveURL(/apparel-shoes/);
});

// TC10 - Verify Digital downloads menu
test.skip('Verify Digital downloads menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/digital-downloads"]').click();

    await expect(page).toHaveURL(/digital-downloads/);
});

// TC11 - Verify Jewelry menu
test.skip('Verify Jewelry menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/jewelry"]').click();

    await expect(page).toHaveURL(/jewelry/);
});

// TC12 - Verify Gift Cards menu
test.skip('Verify Gift Cards menu', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.top-menu a[href="/gift-cards"]').click();

    await expect(page).toHaveURL(/gift-cards/);
});

//xpath access Demo
test.skip('xpath access Demo', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp'); 

});
