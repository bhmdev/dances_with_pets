INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('cat', 'basic', 'domestic short hair');
INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('cat', 'basic', 'domestic medium hair');
INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('cat', 'basic', 'domestic long hair');
INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('dog', 'basic', 'German shepherd');
INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('dog', 'basic', 'maltipoo');
INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('tiger', 'exotic', 'Siberian');
INSERT INTO pet_types (pet_type_name, pet_category_name, pet_breed_name) VALUES ('dragon', 'mythical', 'Slavic');

INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Fiona', '/img/Fiona_01_450x600.png', '12|2', TRUE, E'She\'s a princess.', FALSE, 5);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Midnight', '/img/Midnight_01_450x600.jpg', '20|0', TRUE, E'She\'s a queen.', FALSE, 1);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Mimosa', '/img/Mimosa_01_450x600.jpg', '1|4', TRUE, E'She\'s a ferocious cuddler.', FALSE, 2);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Merlot', '/img/Merlot_01_450x600.jpg', '2|3', TRUE, E'He\'s a little angel.', FALSE, 1);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Shadow', '/img/Shadow_01_450x600.jpg', '1|10', TRUE, E'He\'s handsome goofball.', FALSE, 4);
