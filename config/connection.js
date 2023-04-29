const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  },
  console.log(`Connected to the employee_db database.`)
);

module.exports = sequelize;

/*

_____                       _                                 
| ____|  _ __ ___    _ __   | |   ___    _   _    ___    ___   
|  _|   | '_ ` _ \  | '_ \  | |  / _ \  | | | |  / _ \  / _ \  
| |___  | | | | | | | |_) | | | | (_) | | |_| | |  __/ |  __/  
|_____| |_| |_| |_| | .__/  |_|  \___/   \__, |  \___|  \___|  
                    |_|                  |___/                 
       _____                         _                         
      |_   _|  _ __    __ _    ___  | | __   ___   _ __        
        | |   | '__|  / _` |  / __| | |/ /  / _ \ | '__|       
        | |   | |    | (_| | | (__  |   <  |  __/ | |          
        |_|   |_|     \__,_|  \___| |_|\_\  \___| |_|          
                                                               

*/ 

