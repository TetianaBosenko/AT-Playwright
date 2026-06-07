import BaseComponent from "./BaseComponent";
import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";

export default class extends BaseComponent {
  get faceBookBtn() {
    return new Button(this._page, ".socials_icon.icon-facebook");
  }

  get telegramBtn() {
    return new Button(this._page, ".socials_icon.icon-telegram");
  }

  get youTubeBtn() {
    return new Button(this._page, ".socials_icon.icon-youtube");
  }

  get instagramBtn() {
    return new Button(this._page, ".socials_icon.icon-instagram");
  }

  get linkedinBtn() {
    return new Button(this._page, ".socials_icon.icon-linkedin");
  }

  get ithillelWebsiteLink() {
    return new Button(this._page, 'a[href="https://ithillel.ua"]');
  }

  get ithillelEmail() {
    return new Button(this._page, 'a[href="mailto:developer@ithillel.ua"]');
  }

  get contactsSection() {
    return new BaseElement(this._page, "#contactsSection");
  }

  get aboutSection() {
    return new BaseElement(this._page, "#aboutSection");
  }
}
