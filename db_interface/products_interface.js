function insertProduct(name, description, price, categoryID, callback){
    const query = 'INSERT INTO Products (name, description, price, categoryID) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, description, price, categoryID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getProductByName(name, callback){
    const query = 'SELECT * FROM Products WHERE name = ?';
    connection.query(query, [name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getProductsByCategoryID(categoryID, callback){
    const query = 'SELECT * FROM Products WHERE categoryID = ?';
    connection.query(query, [categoryID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateProductName(name, new_name, callback){
    const query = 'UPDATE Products SET name = ? WHERE name = ?';
    connection.query(query, [new_name, name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateProductDescription(name, description, callback){
    const query = 'UPDATE Products SET description = ? WHERE name = ?';
    connection.query(query, [description, name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateProductPrice(name, price, callback){
    const query = 'UPDATE Products SET price = ? WHERE name = ?';
    connection.query(query, [price, name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateProductCategoryID(name, categoryID, callback){
    const query = 'UPDATE Products SET categoryID = ? WHERE name = ?';
    connection.query(query, [categoryID, name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function deleteProductByProductID(productID, callback){
    const query = 'DELETE FROM Products WHERE productID = ?';
    connection.query(query, [productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function deleteProductByname(name, callback){
    const query = 'DELETE FROM Products WHERE name = ?';
    connection.query(query, [name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function deleteProductByCategoryID(categoryID, callback){
    const query = 'DELETE FROM Products WHERE categoryID = ?';
    connection.query(query, [categoryID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}