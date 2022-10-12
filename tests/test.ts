import { expect, test } from "@playwright/test";

// test if the page title is correct
test("basic test", async ({ page }) => {
  await page.goto("https://localhost:5173/");
  expect(await page.title()).toBe("Realm's Kanban");
});

// test if the page title is correct
test("basic test", async ({ page }) => {
  await page.goto("https://localhost:5173/dashboard");
  expect(await page.title()).toBe("Dashboard");
});

// test if the page title is correct
test("basic test", async ({ page }) => {
  await page.goto("https://localhost:5173/user");
  expect(await page.title()).toBe("User Settings");
});
