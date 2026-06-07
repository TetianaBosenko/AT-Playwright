import { expect } from "@playwright/test";

export default class {
  constructor(page, selector, options) {
    this.element = page.locator(selector, options);
  }

  async checkText(expectedText) {
    return expect(this.element).toContainText(expectedText);
  }

  async click() {
    return this.element.click();
  }

  async checkVisibility() {
    return expect(this.element).toBeVisible();
  }

  async checkAttr(expectedAttr, expectedValue) {
    return expect(this.element).toHaveAttribute(expectedAttr, expectedValue);
  }

  // parent() {
  //   return new BaseElement.parent();
  // }

  // checkParentAttr(expectedAttr, expectedValue) {
  //   return this.element
  //     .parent()
  //     .should("have.attr", expectedAttr)
  //     .and("contain", expectedValue);
  // }

  // removeAttr(targetAttr) {
  //   return this.element.invoke("removeAttr", targetAttr);
  // }

  // removeParentAttr(targetAttr) {
  //   return this.element.parent().invoke("removeAttr", targetAttr);
  // }
}
