\c velour_essence;
-- Users Table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL,
    user_password TEXT NOT NULL,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    user_first_name VARCHAR(255),
    user_last_name VARCHAR(255),
    user_address TEXT,
    user_phone_number VARCHAR(20)
);
 
CREATE TABLE scents (
    scent_id SERIAL PRIMARY KEY,
    scent_name VARCHAR(255) NOT NULL,
    scent_size DECIMAL(4,2) NOT NULL,
    scent_designer VARCHAR(255) NOT NULL,
    scent_details TEXT,
    scent_price DECIMAL(7,2) NOT NULL,
    scent_image TEXT
);


-- Favorites Table
DROP TABLE IF EXISTS favorites CASCADE;
CREATE TABLE favorites (
    favorites_scent_id INTEGER REFERENCES scents(scent_id) ON DELETE CASCADE,
    favorites_user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE, 
    PRIMARY KEY (favorites_scent_id, favorites_user_id)  
);

-- Cart Table
DROP TABLE IF EXISTS cart CASCADE;
CREATE TABLE cart (
    cart_user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    scent_id INTEGER REFERENCES scents(scent_id) ON DELETE CASCADE,
    scent_quantity INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (cart_user_id, scent_id)
);

-- Orders Table
DROP TABLE IF EXISTS past_orders CASCADE;
CREATE TABLE past_orders (
    past_order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    past_order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    past_order_total DECIMAL(10,2) NOT NULL
);

-- Order Details Table
DROP TABLE IF EXISTS past_order_details CASCADE;
CREATE TABLE past_order_details (
    past_order_details_id SERIAL PRIMARY KEY,
    past_order_id INTEGER REFERENCES past_orders(past_order_id) ON DELETE CASCADE,
    scent_id INTEGER REFERENCES scents(scent_id) ON DELETE CASCADE,
    scent_quantity INTEGER NOT NULL DEFAULT 1,
    scent_price DECIMAL(7,2)
);

