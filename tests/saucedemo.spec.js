// @ts-check
import { test, expect } from '@playwright/test';

test('login e validação', async ({ page }) => {
  // Navega para o site
  await page.goto('https://practice.expandtesting.com/login', {
    waitUntil: 'domcontentloaded',
  });

  // Aumenta timeout para essa ação específica (opcional)
  await page.locator('#username').fill('practice', { timeout: 10000 });
  await page.locator('#password').fill('SuperSecretPassword!', { timeout: 10000 });

  // Clica no login
  await page.locator('#submit-login').click({ timeout: 15000 });
});