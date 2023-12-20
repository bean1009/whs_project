function insertOrderDetails(orderID, productID, quantity, callback){
    const query = 'INSERT INTO OrderDetails (orderID, productID, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)';
    connection.query(query, [orderID, productID, quantity], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getOrderByProductID(orderID, productID, callback){
    const query = 'SELECT * FROM OrderDetails WHERE orderID = ? AND productID = ?';
    connection.query(query, [orderID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getOrdersByOrderID(orderID, callback){
    const query = 'SELECT * FROM OrderDetails WHERE orderID = ?';
    connection.query(query, [orderID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateOrderQuantity(orderID, productID, quantity, callback){
    const query = 'UPDATE OrderDetails SET quantity = ? WHERE orderID = ? AND productID = ?';
    connection.query(query, [quantity, orderID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteOrderDetailsByProductID(orderID, productID, callback){
    const query = 'DELETE FROM OrderDetails WHERE orderID = ? AND productID = ?';
    connection.query(query, [orderID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteOrderDetailsByOrderID(orderID, callback){
    const query = 'DELETE FROM OrderDetails WHERE orderID = ?';
    connection.query(query, [orderID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}