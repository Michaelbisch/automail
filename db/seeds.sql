CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);

create table posts (
post_id serial primary key,
title varchar(255),
post varchar(255),
user_id int references users(user_id)
);