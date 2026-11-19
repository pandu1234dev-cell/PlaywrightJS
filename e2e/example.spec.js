// @ts-check
import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const pageTitle = await page.title();
    const pageUrl = await page.url();

    // Expect a title "to contain" a substring.
    await expect(pageTitle).toBe('Automation Testing Practice');
    await expect(pageUrl).toBe('https://testautomationpractice.blogspot.com/');
});

test.skip('Form Testing', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').fill('John Doe');
    await page.locator('#email').fill('john.doe@example.com');
    await page.locator('#phone').fill('1234567890');
    await page.locator('#textarea').fill('This is a test message.');
    await page.locator('#male').check();
    await page.locator('#female').uncheck();
    await page.locator('#sunday').check();
    await page.locator('#country').selectOption('India');
    await page.locator('#colors').selectOption(['Red', 'Green']);
    await page.locator('#animals').selectOption(['Dog', 'Cat']);

    await page.locator('#datepicker').fill('11/16/2026');
    // Open calendar
    await page.locator('#txtDate').click();

    // Select November 16
    await page.locator('#ui-datepicker-div')
        .locator('td a')
        .filter({ hasText: /^16$/ })
        .click();

    await page.locator('#start-date').fill('2026-11-16');
    await page.locator('#end-date').fill('2026-11-17');
    await page.locator('.submit-btn').click();

    // upload files (uncomment the following lines if you have test files to upload)
    await page.locator('#singleFileInput').setInputFiles('testfiles/testfile.txt');
    // Click Upload Single File button
    await page.getByRole('button', {
        name: 'Upload Single File'
    }).click();

    await page.locator('#multipleFilesInput').setInputFiles(['testfiles/testfile2.txt', 'testfiles/testfile3.txt']);
    await page.getByRole('button', {
        name: 'Upload Multiple Files'
    }).click();

})

test.skip('table nth path testing', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const na = 'Learn Selenium';
    const price = await page.locator(
        `//table[@name="BookTable"]//tr[td[1]="${na}"]/td[4]`).innerText();
    console.log('Book Price:', price);
})

test.skip('dynamic xpath for dynamic table testing', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const processName = 'Chrome';
    const columnName = 'CPU (%)';
    const value = await page.locator(
        `//table[@id='taskTable']//tr[td[1]='${processName}']/td[count(//table[@id='taskTable']//th[normalize-space()='${columnName}']/preceding-sibling::th)+1]`
    ).innerText();
    console.log('CPU Value:', value);
})

test.skip('Pagination Web Table Testing', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // 2. Verify table heading
    await expect(page.getByText('Pagination Web Table')).toBeVisible();
    // 3. Verify table is visible
    await expect(page.locator('#productTable')).toBeVisible();
    // 4. Verify table column headings
    await expect(page.locator('#productTable thead')).toContainText('ID');
    await expect(page.locator('#productTable thead')).toContainText('Name');
    await expect(page.locator('#productTable thead')).toContainText('Price');
    await expect(page.locator('#productTable thead')).toContainText('Select');
    // 5. Verify first page displays 5 records
    await expect(page.locator('#productTable tbody tr')).toHaveCount(5);
    // 6. Verify first product name
    await expect(page.locator('#productTable tbody'))
        .toContainText('Smartphone');
    // 7. Verify pagination links are visible
    await expect(page.locator('#pagination a')).toHaveCount(4);
    // 8. Click page 2
    await page.locator('#pagination a').nth(1).click();
    // 9. Verify page 2 is active
   await expect(page.locator('#pagination a').nth(1))
        .toHaveClass('active');
    // 10. Verify page 2 product
    await expect(page.locator('#productTable tbody'))
        .toContainText('Bluetooth Speaker');
    // 11. Verify page 2 displays 5 records
    await expect(page.locator('#productTable tbody tr')).toHaveCount(5);
    // 12. Click page 3
    await page.locator('#pagination a').nth(2).click();
    // 13. Verify page 3 product
    await expect(page.locator('#productTable tbody'))
        .toContainText('Smart Home Hub');
    // 14. Click page 4
    await page.locator('#pagination a').nth(3).click();
    // 15. Verify last page product
    await expect(page.locator('#productTable tbody'))
        .toContainText('Wireless Mouse 20');
    // 16. Verify last page displays 5 records
    await expect(page.locator('#productTable tbody tr')).toHaveCount(5);
    // 2. Get total pagination pages
    const totalPages = await page.locator('#pagination a').count();
    // 3. Loop through all pages
    for (let i = 0; i < totalPages; i++) {
        // Click pagination page
    await page.locator('#pagination a').nth(i).click();

        // Get all checkboxes on current page
    const checkboxes = page.locator(
            '#productTable tbody input[type="checkbox"]'
       );
        // Check all checkboxes
    const count = await checkboxes.count();

    for (let j = 0; j < count; j++) {
         await checkboxes.nth(j).check();
     }

     // Verify all checkboxes are checked
     await expect(checkboxes).toHaveCount(5);

     for (let j = 0; j < count; j++) {
        await expect(checkboxes.nth(j)).toBeChecked();
        }

    console.log(`Page ${i + 1}: All checkboxes selected`);
    }
    // 17. Select checkbox
    await page.locator('#productTable tbody input[type="checkbox"]')
        .first().check();
    // 18. Verify checkbox is selected
    await expect(page.locator('#productTable tbody input[type="checkbox"]')
        .first()).toBeChecked();

        

})


