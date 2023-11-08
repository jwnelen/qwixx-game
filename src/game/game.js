import { RED, YELLOW, GREEN, BLUE, WHITE } from "./constants.js";

class Dies {
  constructor() {
    this.dies = {
      RED: new Die(RED),
      YELLOW: new Die(YELLOW),
      GREEN: new Die(GREEN),
      BLUE: new Die(BLUE),
      WHITE: new Die(WHITE),
    };
  }
}

class Die {
  constructor(color) {
    this.color = color;
    this.value = 1;
  }
}
