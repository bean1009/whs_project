function createStaff(name, passwd, email, phone, callback) {
    const query = 'INSERT INTO Staffs (name, passwd, email, phone) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, passwd, email, phone], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getStaffById(staffId, callback) {
    const query = 'SELECT * FROM Staffs WHERE staff_id = ?';
    connection.query(query, [staffId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getStaffByName(name, callback) {
    const query = 'SELECT * FROM Staffs WHERE name = ?';
    connection.query(query, [name], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateStaffName(staffId, newName, callback) {
    const query = 'UPDATE Staffs SET name = ? WHERE staff_id = ?';
    connection.query(query, [newName, staffId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateStaffPw(staffId, pw, callback) {
    const query = 'UPDATE Staffs SET passwd = ? WHERE staff_id = ?';
    connection.query(query, [pw, staffId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteStaffById(staffId, callback) {
    const query = 'DELETE FROM Staffs WHERE staff_id = ?';
    connection.query(query, [staffId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}