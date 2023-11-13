const _ = import("lodash");
import { RED, YELLOW, GREEN, BLUE, WHITE } from "./constants.mjs";

export class Game {
  constructor() {
    this.dies = [
      new Die(RED),
      new Die(YELLOW),
      new Die(GREEN),
      new Die(BLUE),
      new Die(WHITE),
      new Die(WHITE),
    ];
  }

  getWhiteDies() {
    return this.dies
      .filter((die) => die.color === WHITE)
      .map((die) => die.value);
  }

  getColoredDie(color) {
    return this.dies.filter((die) => die.color === color).pop();
  }

  throwDies() {
    return this.dies.map((die) => {
      die.value = Math.ceil(Math.random() * 6);
      return die;
    });
  }
}
class Die {
  constructor(color) {
    this.color = color;
    this.value = 1;
  }
}

function validateOption(value, firstAvailableDigit, isAscending) {
  if (isAscending) {
    return value >= firstAvailableDigit;
  } else {
    return value <= firstAvailableDigit;
  }
}

export function getAllPossibleOptions(scores, dies) {
  const redColorLine = scores[RED];
  const color = redColorLine.color;
  const isAscending = redColorLine.isAscending;
  const firstAvailableDigit = redColorLine.firstAvailableDigit;
  const [white1, white2] = dies.getWhiteDies();
  const die = dies.getColoredDie(color);
  const possibleOptions = [
    white1 + white2,
    white1 + die.value,
    white2 + die.value,
  ];
  possibleOptions.filter((num) =>
    validateOption(num, firstAvailableDigit, isAscending)
  );
  return possibleOptions;
}
