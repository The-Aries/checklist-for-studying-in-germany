import { test, expect } from '@playwright/test';

const storageKey = 'study-in-germany-checklist:v1';

test('checkbox state persists across reloads', async ({ page }) => {
  await page.goto('/#aps');
  const checkbox = page.locator('[data-item-checkbox="aps-register"]');
  await checkbox.check();
  await page.reload();
  await expect(checkbox).toBeChecked();
});

test('graduation condition controls the APS CV row and completion semantics', async ({ page }) => {
  await page.goto('/#aps');

  const profile = page.locator('[data-profile="graduationAge"]');
  await profile.selectOption('within-one-year');
  await expect(page.locator('[data-checklist-id="aps-postgrad-cv"]')).toHaveAttribute('data-applicable', 'false');

  await profile.selectOption('over-one-year');
  await expect(page.locator('[data-checklist-id="aps-postgrad-cv"]')).toHaveAttribute('data-applicable', 'true');
});

test('reset deletes only the project namespace', async ({ page }) => {
  await page.goto('/#aps');
  await page.evaluate(([key]) => {
    localStorage.setItem(key, JSON.stringify({ schemaVersion: 1, completed: { 'aps-register': true } }));
    localStorage.setItem('unrelated-test-key', 'preserve-me');
  }, [storageKey]);

  page.once('dialog', dialog => dialog.accept());
  await page.locator('[data-action="reset"]').click();

  await expect.poll(async () => page.evaluate(key => localStorage.getItem(key), storageKey)).toBeNull();
  await expect.poll(async () => page.evaluate(() => localStorage.getItem('unrelated-test-key'))).toBe('preserve-me');
});

test('corrupt localStorage does not prevent rendering', async ({ page }) => {
  await page.goto('/#aps');
  await page.evaluate(key => localStorage.setItem(key, '{broken-json'), storageKey);
  await page.reload();
  await expect(page.locator('[data-section="aps"]')).toBeVisible();
});

