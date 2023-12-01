CREATE TABLE Cart (
    userID INT,
    productID INT,
    quantity INT,
    UNIQUE KEY idx_user_product (userID, productID)
);
