#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// This is a word counter project
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellow("Enter your sentence to count the word:")
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
