// Import the person class
import Person from "./person.js";
// Create a new person instance
const person = new Person("Computer");
person.printPossibilities();

person.addFailedRound();
person.cross("red", 2);
person.cross("red", 3);
person.cross("red", 4);

person.printPossibilities();

person.cross("yellow", 2);
person.cross("blue", 12);

person.printPossibilities();
