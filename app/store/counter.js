import { makeAutoObservable } from "mobx";

class Counter {
  name = "";
  growth = "";
  weight = "";
  age = "";
  constructor() {
    makeAutoObservable(this);
  }

  changeName(text) {
    this.name = text;
  }

  changeGrowth(text) {
    this.growth = text;
  }

  changeWeight(text) {
    this.weight = text;
  }

  changeAge(text) {
    this.age = text;
  }
}
export default new Counter();
