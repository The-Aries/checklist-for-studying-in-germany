import { test, expect } from '@playwright/test';

test('root normalizes to APS and renders the APS section', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/#aps$/);
  await expect(page.locator('[data-section="aps"]')).toBeVisible();
  await expect(page.locator('[data-testid="app-title"]')).toContainText('Checklist for studying in Germany');
});

test('direct hashes and browser history switch sections coherently', async ({ page }) => {
  await page.goto('/#aps');
  await page.locator('[data-route="visa"]').click();
  await expect(page).toHaveURL(/#visa$/);
  await expect(page.locator('[data-section="visa"]')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/#aps$/);
  await expect(page.locator('[data-section="aps"]')).toBeVisible();
});

test('APS and visa expose verification metadata and references', async ({ page }) => {
  for (const route of ['aps', 'visa']) {
    await page.goto(`/#${route}`);
    await expect(page.locator('[data-testid="last-updated"]')).toContainText('2026-09-19');
    await expect(page.locator('[data-testid="last-verified"]')).toContainText('2026-09-19');
    await expect(page.locator('[data-testid="references"]')).toBeVisible();
  }
});

