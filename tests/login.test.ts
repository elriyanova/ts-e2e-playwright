import { chromium, test, expect } from "@playwright/test"
import LoginPage from "../pages/login.page";
import SecurePage from "../pages/secure.page";

const username = "tomsmith";
const password = "SuperSecretPassword!";

test("Login test", async ({page, baseURL}) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);

  await page.goto(`${baseURL}/login`);
  await loginPage.login(username, password);  
  
  await expect(page).toHaveURL(/secure/);
  await expect(await securePage.getSuccessfulMessage("You logged into a secure area!")).toBeVisible()
})