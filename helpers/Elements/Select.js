import BaseElement from "./BaseElement";

export default class extends BaseElement {
  constructor(page, selector, options) {
    super(page, selector, options);
  }

  async selectValue(value) {
    return this.element.fill(value);
  }
}
