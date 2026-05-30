import BasePage from "../helpers/PageModels/BasePage";
import { test, expect } from "@playwright/test";

test.describe("Registration tests", () => {
  let basePage;
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page, "/");
    await basePage.navigate();
  });

  test("Successful registration", async ({ page }) => {
    const email = `test${Date.now()}@test.com`;
    await basePage.header.signIn.click();
    await basePage.login.loginTitle.checkVisibility();
    await basePage.login.registrationBtn.click();
    await basePage.signin.registrationTitle.checkVisibility();
    await basePage.signin.nameField.enterValue("Bruce");
    await basePage.signin.lastNameField.enterValue("Wayne");
    await basePage.signin.emailField.enterValue(email);
    await basePage.signin.passField.enterValue("T6urt2mv!");
    await basePage.signin.repeatPassField.enterValue("T6urt2mv!");
    await basePage.signin.registerBtn.click();
    await basePage.containUrlCheck("/panel/garage");
  });

  test("Name required validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.nameField.click();
    await basePage.signin.lastNameField.click();
    await basePage.signin.nameReqErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Name length validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.nameField.enterValue("T");
    await basePage.signin.lastNameField.click();
    await basePage.signin.nameLengErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Name invalid validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.nameField.enterValue("^");
    await basePage.signin.lastNameField.click();
    await basePage.signin.nameInvalidErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Last name required validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.lastNameField.click();
    await basePage.signin.emailField.click();
    await basePage.signin.lastNameReqErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Last name invalid validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.lastNameField.enterValue("^");
    await basePage.signin.nameField.click();
    await basePage.signin.lastNameInvalidErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Last name length validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.lastNameField.enterValue("T");
    await basePage.signin.nameField.click();
    await basePage.signin.lastNameLengErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Email required validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.emailField.click();
    await basePage.signin.passField.click();
    await basePage.signin.emailReqErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Email invalid validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.emailField.enterValue("test");
    await basePage.signin.passField.click();
    await basePage.signin.emailInvalErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Password required validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.passField.click();
    await basePage.signin.repeatPassField.click();
    await basePage.signin.passReqErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Password invalid validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.passField.enterValue("test");
    await basePage.signin.repeatPassField.click();
    await basePage.signin.passInvalErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Password not match validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.passField.enterValue("T6urt2mv!");
    await basePage.signin.repeatPassField.enterValue("T6urt2mv1");
    await basePage.signin.nameField.click();
    await basePage.signin.passNotMatch.checkVisibility();
    await basePage.signin.closeBtn.click();
  });

  test("Re-enter password validation", async () => {
    await basePage.header.signIn.click();
    await basePage.login.registrationBtn.click();
    await basePage.signin.repeatPassField.click();
    await basePage.signin.passField.click();
    await basePage.signin.repeatPassReqErr.checkVisibility();
    await basePage.signin.closeBtn.click();
  });
});
