import chalk from "chalk";
import { instructions } from "./instructions.js";

console.log('Node.js project for practicing JS array methods');


console.log(chalk.green.bold('type "node app.js" to run this file'));

let numbers = [1, 2, 3, 4, 5]

numbers.map(n => console.log(chalk.blue.bold(n)))



let guitars = ['Prs', 'Gibson', 'Fender']

guitars.map(g => console.log(chalk.magenta.bold(g)))


instructions()
