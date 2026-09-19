import { test, expect } from '@playwright/test';

test('FAQ is directly routable and contains the frozen milestone questions', async ({ page }) => {
  await page.goto('/#faq');
  await expect(page.locator('[data-testid="faq-list"]')).toBeVisible();
  await expect(page.locator('[data-testid="faq-list"]')).toContainText('这个清单适合谁');
  await expect(page.locator('[data-testid="faq-list"]')).toContainText('勾选进度保存在哪里');
  await expect(page.locator('[data-testid="faq-list"]')).toContainText('如何提问或纠错');
});

test('footer exposes repository/community actions without fake contact links', async ({ page }) => {
  await page.goto('/#aps');
  const footer = page.locator('[data-testid="footer"]');
  await expect(footer).toBeVisible();

  const githubLinks = footer.locator('a[href*="github.com"]');
  await expect(githubLinks).not.toHaveCount(0);

  const mailLinks = footer.locator('a[href^="mailto:"]');
  const mailCount = await mailLinks.count();
  if (mailCount > 0) {
    const href = await mailLinks.first().getAttribute('href');
    expect(href).not.toMatch(/example\.com|your-email|TODO/i);
  }
});

test('blocking analytics cannot break core checklist behavior', async ({ page }) => {
  await page.route(/cloudflare|beacon\.min\.js|cdn-cgi\/rum/i, route => route.abort());
  await page.goto('/#aps');

  await expect(page.locator('[data-section="aps"]')).toBeVisible();
  const checkbox = page.locator('[data-item-checkbox="aps-register"]');
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await page.locator('[data-route="visa"]').click();
  await expect(page.locator('[data-section="visa"]')).toBeVisible();
});

test('browser client contains no obvious credential material', async ({ page }) => {
  await page.goto('/#aps');
  const html = await page.content();

  expect(html).not.toMatch(/ghp_[A-Za-z0-9]+/);
  expect(html).not.toMatch(/github_pat_[A-Za-z0-9_]+/);
  expect(html).not.toMatch(/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/);
});

