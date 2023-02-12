import inquirer from "inquirer";
import chalk from "chalk";
const welcome = chalk.magenta("Lets start calculation");
console.log(welcome);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: chalk.yellow("Kindly enter your first no: ")
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.yellow("Kindly enter your second no: ")
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: chalk.red("Select operator: ")
    }
]);
// console.log(answers);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log(`${numberOne} + ${numberTwo} = `, result);
}
else {
    console.log("Kindly enter valid input");
}
