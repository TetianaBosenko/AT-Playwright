import { test as setup } from "@playwright/test";
import BasePage from "../helpers/PageModels/BasePage";

setup("Login", async ({ page }) => {
  let basePage;
  basePage = new BasePage(page, "/");
  await basePage.navigate();
  await basePage.header.signIn.click();
  await basePage.login.loginTitle.checkVisibility();
  await basePage.login.emailField.enterValue("bruce.wayne@gmail.com");
  await basePage.login.passField.enterValue("T6urt2mv!");
  await basePage.login.loginBtn.click();
  await basePage.containUrlCheck("/panel/garage");
  await page.context().storageState({ path: "playwright/.auth/user.json" });
});
