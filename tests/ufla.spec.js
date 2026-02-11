// @ts-check
import { test, expect } from '@playwright/test';

test('deve validar o título da página UFLA', async ({ page }) => {
  await page.goto('https://www.ufla.br/', {
    waitUntil: 'domcontentloaded',
  });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/UFLA/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.ufla.br/', {
    waitUntil: 'domcontentloaded',
  });

  // Click the get started link.
  await page.getByRole('link', { name: 'Quero ser UFLA'}).first().click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('#pub-sejaufla')).toBeVisible();
});
