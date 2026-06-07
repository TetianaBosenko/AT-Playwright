import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {
  get registrationTitle() {
    return new BaseElement(this._page, ".modal-title", {
      hasText: "Registration",
    });
  }

  get nameField() {
    return new Input(this._page, "#signupName");
  }

  get lastNameField() {
    return new Input(this._page, "#signupLastName");
  }

  get emailField() {
    return new Input(this._page, "#signupEmail");
  }
  get passField() {
    return new Input(this._page, "#signupPassword");
  }
  get repeatPassField() {
    return new Input(this._page, "#signupRepeatPassword");
  }

  get registerBtn() {
    return new Button(this._page, "button.btn.btn-primary", {
      hasText: "Register",
    });
  }

  get closeBtn() {
    return new Button(this._page, "button.close");
  }

  get nameReqErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Name required",
    });
  }

  get nameLengErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Name has to be from 2 to 20 characters long",
    });
  }

  get nameInvalidErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Name is invalid",
    });
  }

  get lastNameReqErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Last name required",
    });
  }

  get lastNameLengErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Last name has to be from 2 to 20 characters long",
    });
  }

  get lastNameInvalidErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Last name is invalid",
    });
  }

  get emailReqErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Email required",
    });
  }

  get emailInvalErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Email is incorrect",
    });
  }

  get passReqErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Password required",
    });
  }

  get passInvalErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    });
  }

  get passNotMatch() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Passwords do not match",
    });
  }

  get repeatPassReqErr() {
    return new BaseElement(this._page, ".invalid-feedback", {
      hasText: "Re-enter password required",
    });
  }
}
