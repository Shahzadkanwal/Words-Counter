#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("\n \tBismillah Kanwal - Words Counter\n"));
console.log("=".repeat(50));
//prompt to user enter the message
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence:"
    }
]);
//trimming the sentence and spliting it into words based on spaces
let words = answers.sentence.trim().split(" ");
//analysis to user input sentences
console.log("=".repeat(50));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(50));
