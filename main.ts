import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.blue.bold("Welcome to A&A Currency Converter"));
//Define the list of the currencies ofdifferent world and thier exchange rates
let exchange_rate: any = {
    "USD": 1, //Base Currency
    "EUR": 0.9,
    "SAR": 3.75,
    "JYP": 154.59,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277,
} 
//Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.Prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "SAR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices:["USD", "EUR", "SAR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount you want to convert into the other currency",
    }
]);
//Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of Conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amounts
console.log(`Converted Amount = ${converted_amount.toFixed(3)}`);