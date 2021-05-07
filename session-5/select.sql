SELECT * FROM `webshop`;
SELECT * FROM `stock`;

SELECT * FROM `webshop_extension` 
INNER JOIN customers ON webshop_extension.customer_id = customers.id
INNER JOIN stock ON webshop_extension.stock_id = stock.id;