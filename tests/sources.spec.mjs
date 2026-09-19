import { test, expect } from '@playwright/test';

const expectedHosts = new Set([
  'www.aps.org.cn',
  'aps.org.cn',
  'china.diplo.de',
  'videx.diplo.de',
  'www.make-it-in-germany.com',
  'make-it-in-germany.com'
]);

for (const route of ['aps', 'visa']) {
  test(`${route} rows expose authoritative source links`, async ({ page }) => {
    await page.goto(`/#${route}`);
    const rows = page.locator('[data-checklist-id]');
    await expect.poll(() => rows.count()).toBeGreaterThan(0);
    const count = await rows.count();

    for (let index = 0; index < count; index += 1) {
      const links = rows.nth(index).locator('a[href^="http"]');
      expect(await links.count()).toBeGreaterThan(0);
      for (let linkIndex = 0; linkIndex < await links.count(); linkIndex += 1) {
        const href = await links.nth(linkIndex).getAttribute('href');
        const hostname = new URL(href).hostname;
        expect(expectedHosts.has(hostname)).toBeTruthy();
      }
    }
  });
}

test('stage reference blocks contain only real absolute URLs', async ({ page }) => {
  for (const route of ['aps', 'visa']) {
    await page.goto(`/#${route}`);
    const links = page.locator('[data-testid="references"] a[href]');
    await expect.poll(() => links.count()).toBeGreaterThan(0);

    for (let index = 0; index < await links.count(); index += 1) {
      const href = await links.nth(index).getAttribute('href');
      expect(() => new URL(href)).not.toThrow();
      expect(href).not.toMatch(/example\.com|TODO|placeholder/i);
    }
  }
});

