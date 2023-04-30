const taskPrompt = [
    {
        name: 'task',
        message: 'SELECT TASK:',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT']
    },
    {
        name: "department",
        type: "input",
        message: "ENTER NEW DEPARTMENT NAME:",
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            } 
            return false;
        },
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
];

module.exports = taskPrompt;