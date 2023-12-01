function insertShipping(orderID, shippingDate, status, callback){
    const query = 'INSERT INTO Shipping (orderID, shippingDate, status) VALUES (?, ?, ?)';
    connection.query(query, [orderID, shippingDate, status], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getShippingByOrderID(orderID, callback){
    const query = 'SELECT * FROM Shipping WHERE orderID = ?';
    connection.query(query, [orderID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function getShippingByShippingDate(shippingDate, callback){
    const query = 'SELECT * FROM Shipping WHERE shippingDate = ?';
    connection.query(query, [shippingDate], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateStatus(orderID, shippingDate, status, callback){
    const query = 'UPDATE Shipping SET status = ? WHERE orderID = ? AND shippingDate = ?';
    connection.query(query, [status, orderID, shippingDate], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateStatusByShippingID(shippingID, status, callback){
    const query = 'UPDATE Shipping SET status = ? WHERE shippingID = ?';
    connection.query(query, [status, shippingID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function updateShippingDateByShippingID(shippingID, shippingDate, callback){
    const query = 'UPDATE Shipping SET shippingDate = ? WHERE shippingID = ?';
    connection.query(query, [shippingDate, shippingID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function deleteShippingByShippingID(shippingID, callback){
    const query = 'DELETE FROM Shipping WHERE shippingID = ?';
    connection.query(query, [shippingID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function deleteShippingByOrderID(orderID, callback){
    const query = 'DELETE FROM Shipping WHERE orderID = ?';
    connection.query(query, [orderID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteShippingByShippingDate(shippingDate, callback){
    const query = 'DELETE FROM Shipping WHERE shippingDate = ?';
    connection.query(query, [shippingDate], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
