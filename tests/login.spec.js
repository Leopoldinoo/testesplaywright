// @ts-check
import { test, expect } from '@playwright/test';

test('Colocar Username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
});

test('Colocar senha', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#password', 'secret_sauce');
});

test('Clicar no botão login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.click('#login-button');
});
