function insertOrder(userID, orderDate, callback){
    const query = 'INSERT INTO Orders (userID, orderDate) VALUES (?, ?)';
    connection.query(query, [userID, orderDate], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getOrdersByUSerID(userID, callback){
    const query = 'SELECT * FROM Orders WHERE userID = ?';
    connection.query(query, [userID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getOrdersByOrderDate(orderDate, callback){
    const query = 'SELECT * FROM Orders WHERE orderDate = ?';
    connection.query(query, [orderDate], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function deleteOrder(userID, orderDate, callback){
    const query = 'DELETE FROM Orders WHERE userID = ? AND orderDate = ?';
    connection.query(query, [userID, orderDate], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteOrderByUserID(userID, callback){
    const query = 'DELETE FROM Orders WHERE userID = ?';
    connection.query(query, [userID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}