function insertCategory(name, callback){
    const query = 'INSERT INTO Categories (name) VALUES (?)';
    connection.query(query, [name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateCategoryName(name, new_name, callback){
    const query = 'UPDATE Categories SET name = ? WHERE name = ?';
    connection.query(query, [new_name, name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteByProductID(name, callback){
    const query = 'DELETE FROM Categories WHERE name = ?';
    connection.query(query, [name], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}