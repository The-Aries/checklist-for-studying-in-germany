import { test, expect } from '@playwright/test';

const apsRequiredRows = [
  'aps-register',
  'aps-pay-fee',
  'aps-mail-package',
  'aps-monitor-review',
  'aps-interview',
  'aps-download-digzert',
  'aps-registration-proof',
  'aps-transfer-proof',
  'aps-id-passport',
  'aps-admission-roster',
  'aps-transcript',
  'aps-language-proof',
  'aps-degree-docs',
  'aps-postgrad-cv'
];

const visaRequiredRows = [
  'visa-confirm-jurisdiction',
  'visa-book-appointment',
  'visa-prepare-copy-set',
  'visa-videx',
  'visa-section54',
  'visa-biometric-photos',
  'visa-passport',
  'visa-china-residence-proof',
  'visa-admission',
  'visa-language',
  'visa-finance',
  'visa-degree',
  'visa-cv',
  'visa-motivation',
  'visa-aps-proof',
  'visa-insurance',
  'visa-fee',
  'visa-submit',
  'visa-check-issued-label'
];

test('APS contains every frozen milestone item', async ({ page }) => {
  await page.goto('/#aps');
  for (const id of apsRequiredRows) {
    await expect(page.locator(`[data-checklist-id="${id}"]`)).toHaveCount(1);
  }
});

test('visa contains every frozen milestone item', async ({ page }) => {
  await page.goto('/#visa');
  for (const id of visaRequiredRows) {
    await expect(page.locator(`[data-checklist-id="${id}"]`)).toHaveCount(1);
  }
});

test('current mutable official values are rendered, not superseded stale values', async ({ page }) => {
  await page.goto('/#aps');
  await expect(page.locator('[data-checklist-id="aps-pay-fee"]')).toContainText('2500');

  await page.goto('/#visa');
  await expect(page.locator('[data-checklist-id="visa-finance"]')).toContainText('11,904');
  await expect(page.locator('[data-checklist-id="visa-finance"]')).toContainText('992');
  await expect(page.locator('[data-checklist-id="visa-passport"]')).toContainText('一年');
  await expect(page.locator('[data-section="visa"]')).toContainText('2–4');
});

test('long-graduated APS applicants can download the clearly non-official CV template', async ({ page }) => {
  await page.goto('/#aps');
  await page.locator('[data-profile="graduationAge"]').selectOption('over-one-year');

  const row = page.locator('[data-checklist-id="aps-postgrad-cv"]');
  await expect(row).toContainText(/非官方|非 APS 官方/);

  const template = row.locator('a[download], a[href$=".docx"]');
  await expect(template).toHaveCount(1);
  await expect(template).toHaveAttribute('href', /aps-post-graduation-cv-template\.docx$/);
});

