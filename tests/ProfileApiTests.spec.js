import { test } from "../helpers/Fixtures/authenticatedPage";
import ProfilePage from "../helpers/PageModels/ProfilePage";

test("Profile returns mocked user data", async ({ authenticatedPage }) => {
  const userData = {
    status: "ok",
    data: {
      userId: "360647",
      photoFilename: "default-user.png",
      name: "Mocked",
      lastName: "User",
    },
  };
  const profilePage = new ProfilePage(authenticatedPage);
  await authenticatedPage.route("**/api/users/profile", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(userData),
    });
  });
  await profilePage.navigate();
  await profilePage.containUrlCheck("/panel/profile");
  await profilePage.profileName.checkVisibility();
  await profilePage.profileName.checkText("Mocked User");
});
