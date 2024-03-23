#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessedName",
    type: "number",
    message: "please guess a number bettween 1-6: ",
  },
]);

if (answers.userGuessedName === randomNumber) {
  console.log(
    chalk.bold.blueBright("Congtratulations! you guessed right number. ")
  );
} else {
  console.log(chalk.bold.redBright("You guessed a wrong number"));
}
