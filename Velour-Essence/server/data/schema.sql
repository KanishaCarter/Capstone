-- Account Table
DROP TABLE IF EXISTS account;
CREATE TABLE account (
    id SERIAL PRIMARY KEY
    username VARCHAR(25) NOT NULL,
    user_password VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    user_address TEXT,
    phone_number INTEGER
);

-- Scents Table
DROP TABLE IF EXISTS scents;
CREATE TABLE scents (
    id SERIAL PRIMARY KEY,
    scent_name VARCHAR(255) NOT NULL,
    scent_description TEXT,
    price DECIMAL(7,2) NOT NULL,
    scent_image TEXT
)

