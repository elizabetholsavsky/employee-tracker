const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./config/connection');
const displayTitleText = require('./utils/titleText.js');

function init() {
    displayTitleText();
};

init();