// Import the person class
import { Person } from "./person.mjs";
import { Game, getAllPossibleOptions } from "./game.mjs";
import { RED, YELLOW, GREEN, BLUE, WHITE } from "./constants.mjs";
// Create a new person instance

const person = new Person("Computer");
const game = new Game();

console.log(game.throwDies());
console.log(getAllPossibleOptions(person.scores, game));

person.printPossibilities();

person.addFailedRound();
person.cross(RED, 2);

person.printPossibilities();

person.cross(BLUE, 12);

person.printPossibilities();
