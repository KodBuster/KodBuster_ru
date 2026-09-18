import { expect, test } from "@playwright/test";

test("landing page exposes the primary journey", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page).toHaveTitle(/KodBuster/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Сайты");
  await expect(page.getByRole("link", { name: /Обсудить проект/ }).first()).toHaveAttribute("href", "https://t.me/kodbuster");
  await page.getByRole("link", { name: "Посмотреть кейсы" }).click();
  await expect(page.locator("#cases")).toBeInViewport();
  await expect(page.locator("body")).not.toHaveCSS("overflow-x", "scroll");
  expect(errors).toEqual([]);
});

test("mobile navigation opens and reaches sections", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only behavior");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Открыть меню" });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("navigation", { name: "Мобильная навигация" }).getByRole("link", { name: /Услуги/ }).click();
  await expect(page.locator("#services")).toBeInViewport();
  await expect(page.getByRole("button", { name: "Открыть меню" })).toHaveAttribute("aria-expanded", "false");
});

test("page has no horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});
