import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
import BasePage from "./BasePage";

export default class extends BasePage {
  constructor(page) {
    super(page, "/panel/garage");
  }

  get addCarBtn() {
    return new Button(this._page, "button.btn.btn-primary", {
      hasText: "Add car",
    });
  }

  get addCarTitle() {
    return new BaseElement(this._page, ".modal-title", {
      hasText: "Add a car",
    });
  }

  get selectCarBrand() {
    return new Select(this._page, "#addCarBrand");
  }

  get selectCarModel() {
    return new Select(this._page, "#addCarModel");
  }

  get addCarMileage() {
    return new Input(this._page, "#addCarMileage");
  }

  get cancelBtn() {
    return new Button(this._page, "button.btn.btn-secondary", {
      hasText: "Cancel",
    });
  }

  get addBtn() {
    return new Button(this._page, ".modal-footer .btn-primary");
  }

  get carItem() {
    return new BaseElement(this._page, ".car-item");
  }

  get carName() {
    return new BaseElement(this._page, ".car_name");
  }

  async addCar(brand, model, mileage) {
    await this.selectCarBrand.selectValue(brand);
    await this.selectCarModel.selectValue(model);
    await this.addCarMileage.enterValue(mileage);
    await this.addBtn.click();
  }
}
