const { displayTitleText, displayExitText } = require('./lib/specialText.js');
const db = require('./config/connection.js');
const selectTask = require('./lib/queries.js');

// handle errors or start application
db.connect(function (err) {
    if (err) throw err;
    init();
});

// start application, show title and task prompt
function init() {
    displayTitleText();
    selectTask();
};
