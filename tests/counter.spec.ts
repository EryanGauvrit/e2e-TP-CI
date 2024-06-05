import test, { expect } from "@playwright/test";
import { describe } from "node:test";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

describe('Counter', () => {
    test('should increment the counter with one click', async ({ page }) => {
        const text = await page.textContent('#counter');
        expect(text).toBe('count is 0');
    });
    test('should increment the counter with double click', async ({ page }) => {
        await page.dblclick('#counter');
        const text = await page.textContent('#counter');
        expect(text).toBe('count is 2');
    });
});