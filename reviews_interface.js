function insertReview(productID, userID, rating, review, callback){
    const query = 'INSERT INTO Reviews (productID, userID, rating, review) VALUES (?, ?, ?, ?)';
    connection.query(query, [productID, userID, rating, review], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getReviewsByProductID(productID, callback){
    const query = 'SELECT * FROM Reviews WHERE productID = ?';
    connection.query(query, [productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
function getReviewsByUserID(userID, callback){
    const query = 'SELECT * FROM Reviews WHERE userID = ?';
    connection.query(query, [userID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getReviewsByRating(rating, callback){
    const query = 'SELECT * FROM Reviews WHERE rating = ?';
    connection.query(query, [rating], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateReview(productID, userID, rating, review, callback){
    const query = 'UPDATE Reviews SET rating = ?, review = ? WHERE userID = ? AND productID = ?';
    connection.query(query, [rating, review, userID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function updateReviewByReviewID(reviewID, rating, review, callback){
    const query = 'UPDATE Reviews SET rating = ?, review = ? WHERE reviewID = ?';
    connection.query(query, [rating, review, reviewID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteReviewByReviewID(reviewID, callback){
    const query = 'DELETE FROM Reviews WHERE reviewID = ?';
    connection.query(query, [reviewID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function deleteReview(productID, userID, callback){
    const query = 'DELETE FROM Reviews WHERE userID = ? AND productID = ?';
    connection.query(query, [userID, productID], (err, results) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}
