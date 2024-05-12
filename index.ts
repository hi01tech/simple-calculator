#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter first number", type:"number", name:"firtstNumber"},
   {message: "Enter second number", type:"number", name:"secondNumber"},
   {
    message:"Select one of the operator to perform action",
    type:"list", 
    name:"operator",
    choices:["Addition","Subraction","Multiplication","Division"]} ,
]);

if (answer.operator === "Addition") {
    console.log("Your value is: " +(answer.firtstNumber + answer.secondNumber));
} else if (answer.operator === "Subraction") {
    console.log("Your value is: " +(answer.firtstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
    console.log("Your value is: " +(answer.firtstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
    console.log("Your value is: " +(answer.firtstNumber / answer.secondNumber));
} else {
    console.log ("Please select valid operator")
};