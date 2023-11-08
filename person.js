import ColorLine from "./scores.js";
class Person {
  constructor(name) {
    this.name = name;
    this.penalties = 0;
    this.scores = {
      red: new ColorLine("red", true),
      yellow: new ColorLine("yellow", true),
      green: new ColorLine("green", false),
      blue: new ColorLine("blue", false),
    };
  }

  getTotalScore() {
    let colorScores = Object.values(this.scores).reduce(
      (acc, colorLine) => acc + colorLine.getScore(),
      0
    );
    return colorScores - this.penalties * 5;
  }

  addFailedRound() {
    this.penalties++;
  }

  cross(color, digit) {
    const colorLine = this.scores[color];
    if (colorLine.isAscending) {
      colorLine.amountCrossed++;
      colorLine.firstAvailableDigit = digit + 1;
    } else {
      colorLine.amountCrossed++;
      colorLine.firstAvailableDigit = digit - 1;
    }
  }

  print() {
    console.log(`${this.name} has a score of ${this.getTotalScore()}`);
  }

  printPossibilities() {
    console.log(`${this.name} has the following possibilities:`);
    for (const [key, value] of Object.entries(this.scores)) {
      console.log(
        `${key}: ${value.amountCrossed} crossed, next available digit is ${value.firstAvailableDigit}`
      );
    }
  }
}

export default Person;
