#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "number",
    name: "firstName",
  },

  {
    message: "Enter second number",
    type: "number",
    name: "secondNumber",
  },

  {
    message: "Select one operator to perform an operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if(answer.operator ==="Addition"){
  console.log(answer.firstName +answer.secondNumber);
} else if  (answer.operator ==="Subtraction") {
  console.log(answer.firstName - answer.secondNumber);
} else if (answer.operator ==="Multiplication"){
  console.log(answer.firstName * answer.secondNumber);
}else if (answer.operator ==="Division"){
  console.log(answer.firstName / answer.secondNumber);
}else{
  console.log("Please select valid operator" );
  
}
  

