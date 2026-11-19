// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Testing Practice/);
  });

test('get started link', async ({ page }) => {
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

  await page.locator('#txtDate').fill('11/16/2026');
  await page.locator('#start-date').fill('11/16/2026');
  await page.locator('#end-date').fill('11/17/2026');
  await page.locator('.submit-btn').click(); // Click the submit button with

 // upload files (uncomment the following lines if you have test files to upload)
  await page.locator('#singleFileInput').setInputFiles('testfiles/testfile.txt');
   // Click Upload Single File button
  await page.getByRole('button', {
        name: 'Upload Single File'
    }).click();
 
  await page.locator('#multipleFilesInput').setInputFiles(['testfiles/testfile1.txt', 'testfiles/testfile2.txt']);
  await page.getByRole('button', {
        name: 'Upload Multiple Files'
    }).click(); 
  
  await expect(page.locator('#name')).toHaveValue('John Doe');
  await expect(page.locator('#email')).toHaveValue('john.doe@example.com');
  await expect(page.locator('#phone')).toHaveValue('1234567890');
  await expect(page.locator('#textarea')).toHaveValue('This is a test message.');

 })

 test('Pagination Web Table Testing', async ({ page }) => {

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
  
})

