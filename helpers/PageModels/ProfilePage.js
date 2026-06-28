import BaseElement from "../Elements/BaseElement";
import BasePage from "./BasePage";

export default class extends BasePage {
  constructor(page) {
    super(page, "/panel/profile");
  }

  get profileName() {
    return new BaseElement(this._page, ".profile_name.display-4");
  }
}
