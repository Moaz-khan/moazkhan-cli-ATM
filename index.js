#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your 4-digit code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check Balance", "fastCash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Unable to get transaction your balance is insufficient ");
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select your amount",
                type: "list",
                choices: ["1000", "5000", "10000", "20000", "25000"],
            },
        ]);
        if (myBalance >= fastCashAns.fastCash) {
            myBalance -= fastCashAns.fastCash;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Unable to get transaction your balance is insufficient ");
        }
    }
}
else {
    console.log("incorrect pin code");
}
