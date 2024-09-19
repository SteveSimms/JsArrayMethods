import chalk from "chalk";

export const instructions = () => {
    console.log(chalk.yellowBright.bold(
        `Above are some basic arrays and array methods.
Run the code to see the output.
When you are ready, create an array called "amps".
Provide it with your 3 favorite amps. Remember,
words are strings in JS. Use double "" or single '' quotes.\n`
    ));

    console.log(chalk.yellowBright.bold(
        `Use the map method to print each amp to the console.\n`
    ));

    console.log(chalk.yellowBright.bold(
        `Refer to "JavaScript: The Definitive Guide" (page 166) for examples,
and to your numbers and guitars examples in app.js.\n`
    ));

    console.log(chalk.cyanBright.bold(
        `If you feel adventurous, use the "chalk" library to add color
to the output of your amps in the console.`
    ));
}

export const answer = () => {
    console.log(chalk.green.bold(
        `\nHere is an example of how you can create and print the "amps" array:\n`
    ));

    console.log(
        chalk.white.bold('let ') +
        chalk.blue.bold('amps') +
        chalk.white.bold(' = [') +
        chalk.yellow.bold("'Marshall'") +
        chalk.white.bold(', ') +
        chalk.yellow.bold("'Fender'") +
        chalk.white.bold(', ') +
        chalk.yellow.bold("'Vox'") +
        chalk.white.bold('];\n')
    );

    console.log(
        chalk.blue.bold('amps') +
        chalk.magenta.bold('.map(') +
        chalk.cyan.bold('function') +
        chalk.white.bold(' (a) {\n    ') +
        chalk.cyan.bold('console') +
        chalk.white.bold('.') +
        chalk.cyan.bold('log') +
        chalk.white.bold('(') +
        chalk.cyan.bold('chalk.cyan(a)') +
        chalk.white.bold(');\n') +
        chalk.white.bold('}\n') +
        chalk.magenta.bold(');\n')
    );
}