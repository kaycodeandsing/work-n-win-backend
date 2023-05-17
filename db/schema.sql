DROP DATABASE IF EXISTS toDos_dev;
CREATE DATABASE toDos_dev;

\c toDos_dev;

CREATE TABLE toDos (
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL,
    duration NUMERIC,
    finished BOOLEAN
);