const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

const questions =( [
    {
    type: "input",
    message: "Please name your project.",
    name: "title"
},
{
    type: "input",
    message: "Please describe the purpose of this project.",
    name: "description",
},
{
    type: "checkbox",
    message: "Do you want a Table of Contents?",
    name: "Table of Contents",
},
{
    type: "input",
    message: "How is this project installed?",
    name: " Installation",
},
{
    tpye: "checkbox",
    message: "Please select the license.",
    name: "License",
},
{
    tpye: "input",
    message: "Please state how this project will be used.",
    name: "Usage",
},
{
    tpye: "input",
    message: "Who cotributed to the project?",
    name: "Contributing",
},
{
    tpye: "input",
    message: "What tests are there for your project?",
    name: "Tests",
},
{
    tpye: "input",
    message: "What do people do if they have questions about your project?",
    name: "Questions",
},
]
)
