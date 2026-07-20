import { test, expect } from '@playwright/test';

test('EPAM Services menu exposes Client Work link', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
