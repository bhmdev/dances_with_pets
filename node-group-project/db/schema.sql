DROP TABLE IF EXISTS surrender_applications;
DROP TABLE IF EXISTS adoption_applications;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS pet_types;

CREATE TABLE pet_types (
  id SERIAL PRIMARY KEY,
  classification VARCHAR(30) NOT NULL,
  type VARCHAR(50) NOT NULL,
  breed VARCHAR(50) NOT NULL UNIQUE,
  breed_img_url VARCHAR(255) NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  pet_img_url VARCHAR(255) NOT NULL,
  age VARCHAR(12),
  vaccination_status BOOLEAN,
  description TEXT,
  adoption_story TEXT NOT NULL,
  adoption_status BOOLEAN NOT NULL,
  pet_type_id INTEGER REFERENCES pet_types(id) NOT NULL
);

CREATE TABLE adoption_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  home_status VARCHAR(5) NOT NULL,
  application_status VARCHAR(8) NOT NULL,
  pet_id INTEGER REFERENCES pets(id) NOT NULL
);

CREATE TABLE surrender_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pet_name VARCHAR(50) NOT NULL,
  pet_type_id INTEGER REFERENCES pet_types(id) NOT NULL,
  pet_img_url VARCHAR(255) NOT NULL,
  pet_age VARCHAR(20),
  vaccination_status BOOLEAN,
  description TEXT,
  adoption_story TEXT NOT NULL,
  application_status VARCHAR(8) NOT NULL
);