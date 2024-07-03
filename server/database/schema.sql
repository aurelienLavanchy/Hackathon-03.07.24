-- SQLBook: Code

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
);

CREATE TABLE entreprise (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    detail TEXT NOT NULL,
    location VARCHAR(100) NOT NULL,
    activity_sector VARCHAR(100) NOT NULL,
    creation DATE NOT NULL
);

CREATE TABLE job_offer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(80) NOT NULL,
    description TEXT NOT NULL,
    skill VARCHAR(60) NOT NULL,
    contract_type VARCHAR(60) NOT NULL,
    publication date DATE NOT NULL,
    rqth BOOLEAN NOT NULL,
    location VARCHAR(80) NOT NULL,
    salary VARCHAR(80) NOT NULL,
    status VARCHAR(80) NOT NULL,
    category_id INT UNSIGNED,
    entreprise_id INT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES category (id),
    FOREIGN KEY (entreprise_id) REFERENCES entreprise (id)
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60)
);

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)