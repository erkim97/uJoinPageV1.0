var faker = require('faker'); 
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	database:'join_us'
});

// Insert 500 random email data into join_us DB
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();

// var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].time);
//   console.log(results[0].date);
//   console.log(results[0].now);
// });

//To SELECT all users from database:
// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

//To count the number of users in the database:
// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// Find earliest date first user signed up 
// SELECT 
//     DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date 
// FROM users;


//Find number of users signed up in each month 
//SELECT Monthname(created_at) AS month, 
//        Count(*)              AS count 
// FROM   users 
// GROUP  BY month 
// ORDER  BY count DESC;


// //Show which email providers people are using
// SELECT CASE 
//          WHEN email LIKE '%@gmail.com' THEN 'gmail' 
//          WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
//          WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
//          ELSE 'other' 
//        end      AS provider, 
//        Count(*) AS total_users 
// FROM   users 
// GROUP  BY provider 
// ORDER  BY total_users DESC; 