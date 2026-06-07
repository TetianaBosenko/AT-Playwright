import BaseElement from "./BaseElement";

export default class extends BaseElement {
  constructor(page, selector, options) {
    super(page, selector, options);
  }

  async enterValue(text) {
    return this.element.fill(text);
  }
}
