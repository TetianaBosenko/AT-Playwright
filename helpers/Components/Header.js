import Button from "../Elements/Button";
import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {
  get headerLogo() {
    return new Button(this._page, '[class="header_logo"]');
  }

  get guestLogIn() {
    return new Button(this._page, '[class="header-link -guest"]');
  }

  get signIn() {
    return new Button(
      this._page,
      '[class="btn btn-outline-white header_signin"]',
    );
  }

  get homeBtn() {
    return new Button(this._page, '[class="btn header-link -active"]');
  }

  get contactsBtn() {
    return new Button(this._page, '[appscrollto="contactsSection"]');
  }

  get aboutBtn() {
    return new Button(this._page, '[appscrollto="aboutSection"]');
  }
}
