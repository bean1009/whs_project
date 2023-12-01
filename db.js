const mysql = require("mysql");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1009",
    database: "test",
    port: "3306"
});

// MySQL connection 실행
connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to the database. ");
})

module.exports = connection;