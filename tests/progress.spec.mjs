import { test, expect } from '@playwright/test';

test('progress changes from actual checkbox state', async ({ page }) => {
  await page.goto('/#aps');
  await page.locator('[data-profile="graduationAge"]').selectOption('within-one-year');

  const before = await page.locator('[data-testid="stage-progress"]').textContent();
  await page.locator('[data-item-checkbox="aps-register"]').check();
  const after = await page.locator('[data-testid="stage-progress"]').textContent();

  expect(after).not.toBe(before);
});

test('overall progress ignores deferred stages', async ({ page }) => {
  await page.goto('/#aps');
  const progress = page.locator('[data-testid="overall-progress"]');
  await expect(progress).toBeVisible();
  await expect(progress).not.toContainText('Anmeldung');
  await expect(progress).not.toContainText('居留许可');
});

test('stage tab labels expose live completion counts', async ({ page }) => {
  await page.goto('/#aps');
  const apsTab = page.locator('[data-route="aps"]');
  const visaTab = page.locator('[data-route="visa"]');
  const faqTab = page.locator('[data-route="faq"]');

  await page.locator('[data-profile="graduationAge"]').selectOption('within-one-year');
  await expect(apsTab).toContainText(/0\s*\/\s*13/);
  await expect(visaTab).toContainText(/0\s*\/\s*19/);
  await expect(faqTab).not.toContainText(/\d+\s*\/\s*\d+/);

  await page.locator('[data-item-checkbox="aps-register"]').check();
  await expect(apsTab).toContainText(/1\s*\/\s*13/);

  await page.locator('[data-profile="graduationAge"]').selectOption('over-one-year');
  await expect(apsTab).toContainText(/1\s*\/\s*14/);
});

