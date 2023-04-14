import { test, expect } from '@playwright/test';

/*
I did:
1) Functional Testing - Test with valid credentials for successful login and invalid credentials for failed login.
2) Compatibility Testing - Test the login form on different browsers (chromium, firefox and Safari)
*/

test('successful_login', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/sampleapp');
    await page.getByPlaceholder('User Name').click();
    await page.getByPlaceholder('User Name').fill('non-empty');
    await page.getByPlaceholder('********').click();
    await page.getByPlaceholder('********').fill('pwd');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByText('Welcome, non-empty!').click();
    //Example of assertion
    await expect(await page.getByText('Welcome, non-empty!')).toHaveText('Welcome, non-empty!');
});

test('unsuccessful_login', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('test');
  await page.getByPlaceholder('********').click();
  await page.getByPlaceholder('********').fill('test');
  await page.getByRole('button', { name: 'Log In' }).click();
  //Example of assertion
  await expect(page.getByText('Invalid username/password')).toHaveText('Invalid username/password');
});
