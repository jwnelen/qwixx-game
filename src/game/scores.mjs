import { mappingCrossed } from "./constants.mjs";

class ColorLine {
  constructor(color, isAscending = true) {
    this.color = color;
    this.amountCrossed = 0;
    this.firstAvailableDigit = isAscending ? 2 : 12;
    this.isAscending = isAscending; // True means the next digit shoud be higher
  }
  getScore = () => {
    // check if the key exists in the mappingCrossed
    return mappingCrossed[this.amountCrossed] || 0;
  };
}

export default ColorLine;
