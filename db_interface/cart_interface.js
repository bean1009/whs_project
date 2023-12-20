function insertCartItem(userID, productID, quantity, callback){
    const query = 'INSERT INTO Cart (userID, productID, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)';
    connection.query(query, [userID, productID, quantity], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getCartItemsByUSerID(userID, callback){
    const query = 'SELECT * FROM Cart WHERE userID = ?';
    connection.query(query, [userID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getQuantityByProductID(userID, productID, callback){
    const query = 'SELECT * FROM Cart WHERE userID = ? AND productID = ?';
    connection.query(query, [userID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateQuantityByProductID(userID, productID, quantity, callback){
    const query = 'UPDATE Cart SET quantity = ? WHERE userID = ? AND productID = ?';
    connection.query(query, [quantity, userID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteByProductID(userID, productID, callback){
    const query = 'DELETE FROM Cart WHERE userID = ? AND productID = ?';
    connection.query(query, [userID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
