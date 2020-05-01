var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bulletin_board'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;