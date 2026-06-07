import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LogIn from "../Components/LogIn";
import SignIn from "../Components/SignIn";
import { expect } from "@playwright/test";

export default class {
  _url;
  _page;

  constructor(page, url) {
    this._url = url;
    this._page = page;
    this.footer = new Footer(page);
    this.header = new Header(page);
    this.login = new LogIn(page);
    this.signin = new SignIn(page);
  }

  async navigate(url) {
    return this._page.goto(this._url);
  }

  async containUrlCheck(expectedUrl) {
    return expect(this._page).toHaveURL(expectedUrl);
  }
}
