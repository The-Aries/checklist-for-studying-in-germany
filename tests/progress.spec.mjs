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

