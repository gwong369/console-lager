DROP DATABASE IF EXISTS neighborGoods;
CREATE DATABASE neighborGoods;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(255) NOT NULL,
	lastName varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
    phone int(15) NOT NULL,
	password varchar(255) NOT NULL,
	neighborhood varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	itemName varchar(255) NOT NULL,
    lender varchar(255) NOT NULL,
    available BOOLEAN NOT NULL,
    image varchar(255) NOT NULL,
	neighborhood varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
