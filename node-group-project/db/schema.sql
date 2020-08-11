DROP TABLE IF EXISTS adoption_applications;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS pet_types;

CREATE TABLE pet_types (
  id SERIAL PRIMARY KEY,
  pet_type_name VARCHAR(50) NOT NULL,
  pet_type_thumbnail_url VARCHAR(255) NOT NULL,
  pet_category_name VARCHAR(30),
  pet_breed_name VARCHAR(50),
  description TEXT
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  pet_name VARCHAR(50) NOT NULL,
  pet_thumbnail_url VARCHAR(255) NOT NULL,
  pet_age VARCHAR(20),
  pet_vaccination_status BOOLEAN,
  pet_adoption_story TEXT,
  pet_adoption_status BOOLEAN,
  pet_type_id INTEGER REFERENCES pet_types(id) NOT NULL
);

CREATE TABLE adoption_applications (
  id SERIAL PRIMARY KEY,
  applicant_name VARCHAR(50) NOT NULL,
  applicant_email VARCHAR(255) NOT NULL,
  applicant_phone VARCHAR(20),
  applicant_home_status VARCHAR(5),
  application_status VARCHAR(8),
  pet_id INTEGER REFERENCES pets(id) NOT NULL
);