function createCustomer(passwd, name, phone, email, callback) {
    const query = 'INSERT INTO Customers (passwd, name, phone, email) VALUES (?, ?, ?, ?)';
    connection.query(query, [passwd, name, phone, email], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getCustomerById(customerId, callback) {
    const query = 'SELECT * FROM Customers WHERE customer_id = ?';
    connection.query(query, [customerId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getCustomerByName(name, callback) {
    const query = 'SELECT * FROM Customers WHERE name = ?';
    connection.query(query, [name], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateCustomerName(customerId, newName, callback) {
    const query = 'UPDATE Customers SET name = ? WHERE customer_id = ?';
    connection.query(query, [newName, customerId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateCustomerPw(customerId, pw, callback) {
    const query = 'UPDATE Customers SET passwd = ? WHERE customer_id = ?';
    connection.query(query, [pw, customerId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteCustomerById(customerId, callback) {
    const query = 'DELETE FROM Customers WHERE customer_id = ?';
    connection.query(query, [customerId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}