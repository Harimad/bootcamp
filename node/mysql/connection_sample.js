var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'dev',
  password: '1234',
  database: 'dev',
});

connection.connect();

connection.query('SELECT * FROM product;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();
