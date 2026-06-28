import { test } from "../helpers/Fixtures/userGaragePage";

test("garage page should have add car button", async ({ userGaragePage }) => {
  await userGaragePage.addCarBtn.checkVisibility();
});
