"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
console.log(chalk_1.default.blue.bold("Welcome to A&A Currency Converter"));
//Define the list of the currencies ofdifferent world and thier exchange rates
var exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "SAR": 3.75,
    "JYP": 154.59,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277,
};
//Prompt the user to select currencies to convert from and to
var user_answer = await inquirer_1.default.Prompt([
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
        choices: ["USD", "EUR", "SAR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount you want to convert into the other currency",
    }
]);
//Perform currency conversion by using formula
var from_amount = exchange_rate[user_answer.from_currency];
var to_amount = exchange_rate[user_answer.to_currency];
var amount = user_answer.amount;
//Formula of Conversion
var base_amount = amount / from_amount;
var converted_amount = base_amount * to_amount;
//Display the converted amounts
console.log("Converted Amount = ".concat(converted_amount));
