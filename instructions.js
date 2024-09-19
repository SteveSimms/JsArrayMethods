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
