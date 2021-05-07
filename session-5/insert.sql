INSERT INTO `webshop` (`id`, `customer`, `address`, `orders`, `orderDatetime`)
VALUES 
(NULL, 'Sven Kronxxxxe', 'Waldstraße 15, 12345 Musterort', '1 coke', '2021-05-05 19:07:15.000000');


INSERT INTO `customers` (`id`, `firstname`, `lastname`, `zipcode`, `city`, `street`, `housenr`, `createdDatetime`) 
VALUES 
(NULL, 'Sven', 'Kronsxxxxxsad', '12345', 'Musterstadt', 'Privatweg', '9', '2021-05-05 19:09:59.000000');

INSERT INTO `stock` (`id`, `productname`, `quantity`, `createdDatetime`) VALUES
(NULL, 'coke', 5499, '2021-05-05 19:11:26');

INSERT INTO `stock` (`id`, `productname`, `quantity`, `createdDatetime`) VALUES
(NULL, 'beer', 99, '2021-05-05 19:11:26');

INSERT INTO `webshop_extension` (`id`, `customer_id`, `stock_id`) VALUES (NULL, '1', '1');