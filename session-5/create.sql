CREATE TABLE `webshop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `orders` varchar(100) DEFAULT NULL,  
  `orderDatetime` datetime DEFAULT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(200) DEFAULT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `housenr` varchar(5) DEFAULT NULL,  
  `createdDatetime` datetime DEFAULT NULL,   
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productname` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT '0',
  `createdDatetime` datetime DEFAULT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `webshop_extension` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT '0',
  `stock_id` varchar(200) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;