import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {
  get loginTitle() {
    return new BaseElement(this._page, ".modal-title", { hasText: "Log in" });
  }

  get registrationBtn() {
    return new Button(this._page, "button.btn.btn-link", {
      hasText: "Registration",
    });
  }

  get forgotPassBtn() {
    return new Button(this._page, "button.btn.btn-link", {
      hasText: "Forgot password",
    });
  }

  get emailField() {
    return new Input(this._page, "#signinEmail");
  }

  get passField() {
    return new Input(this._page, "#signinPassword");
  }

  get loginBtn() {
    return new Button(this._page, "button.btn.btn-primary", {
      hasText: "Login",
    });
  }

  async login(email, password) {
    await this.emailField.enterValue(email);
    await this.passField.enterValue(password);
    await this.loginBtn.click();
  }
}
