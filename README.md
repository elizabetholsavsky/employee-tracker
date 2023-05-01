# Employee Tracker

## Description
Manage company employee data using this Command line Content Management System (CMS) built using Node.js, Inquirer, and MySQL. Options include: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) [![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)

Watch a [video](https://drive.google.com/file/d/19lW-0GmEP5WKxZGGcbJgH0o3F3YHdwfB/view?usp=sharing) demonstration of the basic functionaity using mock data:

https://user-images.githubusercontent.com/116515976/235394469-14040ce4-821e-49f3-8464-663cea5c3747.mov

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Questions](#questions)

## Installation
* Check if you have Node.js installed by typing "node -v" in your command line. If node is not installed, visit the [Node.js website](https://nodejs.org/en) to install. 
* Next, clone this project repository to your computer. 
* Use the command "npm install" to install dependecies. 
* Create a file in the root directory titled ".env" and type "PASSWORD='[YOUR PASSWORD HERE]'"
* Type "mysql -u root -p" in the terminal and enter your personal MySQL password. Next, type "source schema.sql" and "source seeds.sql" (These commands will create the employee_db database and seed the database with mock data.).

## Usage
* Open terminal in "index.js" and run the command "npm start".
* Select a desired task and follow the Inquirer prompts.
* Choose another task or exit the application.
* To exit application, choose "EXIT" from task prompt list. 
* Reference the video demonstration above as needed.

## License
[MIT License](https://opensource.org/licenses/MIT)

## Contributing
This project was created as a challenge assignment for the Austin UT Full Stack Boot Camp. Table structures provided in 'assets' folder was provided by Austin UT Boot Camps. Please contact me with any ideas, questions, or requests.

## Questions

Ask questions by contacting me at:

Github [elizabetholsavsky](https://github.com/elizabetholsavsky)

Email elizabetholsavsky@gmail.com
