import { test, expect } from '@playwright/test';

test('core checklist remains usable at a narrow viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#aps');

  await expect(page.locator('[data-checklist-id="aps-register"]')).toBeVisible();
  await expect(page.locator('[data-item-checkbox="aps-register"]')).toBeVisible();
  await expect(page.locator('[data-route="visa"]')).toBeVisible();
});

test('print media hides interactive chrome but keeps references', async ({ page }) => {
  await page.goto('/#visa');
  await page.emulateMedia({ media: 'print' });

  await expect(page.locator('[data-action="reset"]')).toBeHidden();
  await expect(page.locator('[data-testid="references"]')).toBeVisible();
  await expect(page.locator('[data-testid="last-verified"]')).toBeVisible();
});

test('blank-print preparation does not overwrite saved checklist state', async ({ page }) => {
  await page.goto('/#aps');
  const checkbox = page.locator('[data-item-checkbox="aps-register"]');
  await checkbox.check();

  await page.locator('[data-action="print-blank"]').click();
  await page.waitForTimeout(50);
  await expect(checkbox).toBeChecked();
});

