INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('cat', '/img/types/domestic-short-hair.jpg', 'basic', 'domestic short hair', 'A cat of mixed ancestry, thus not belonging to any particular recognized cat breed, possessing a coat of short fur.');
INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('cat', '/img/types/domestic-medium-hair.jpg', 'basic', 'domestic medium hair', 'A fluffy and docile cat, the domestic medium-hair is the perfect hybrid of his domestic short- and longhair relatives.');
INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('cat', '/img/types/domestic-long-hair.jpg', 'basic', 'domestic long hair', 'A cat of mixed ancestry, thus not belonging to any particular recognised cat breed, possessing a coat of semi-long to long fur.');
INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('dog', '/img/types/german-shepherd.jpg', 'basic', 'German Shepherd', 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany.');
INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('dog', '/img/types/maltipoo.jpg', 'basic', 'Maltipoo', 'The Maltipoo is a popular cross of the Maltese and Poodle, known for their fun-loving and affectionate nature.');
INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('tiger', '/img/types/siberian-tiger.jpg', 'exotic', 'Siberian', 'The Siberian tiger is a tiger from a specific population of the Panthera tigris tigris subspecies that is native to the Russian Far East, Northeast China, and possibly North Korea.');
INSERT INTO pet_types (pet_type_name, pet_type_thumbnail_url, pet_category_name, pet_breed_name, description)
  VALUES ('dragon', '/img/types/slavic-dragon.jpg', 'mythical', 'Slavic', 'A Slavic dragon is any dragon in Slavic mythology, including the Russian zmei, the Slovak drak and sarkan, Czech drak, Polish zmij, the Serbian and Croatian zmaj, the Macedonian zmey.');

INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Fiona', '/img/pets/Fiona_01_450x600.png', '12|2', TRUE, E'She\'s a princess.', FALSE, 5);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Midnight', '/img/pets/Midnight_01_450x600.jpg', '20|0', TRUE, E'She\'s a queen.', FALSE, 1);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Mimosa', '/img/pets/Mimosa_01_450x600.jpg', '1|4', TRUE, E'She\'s a ferocious cuddler.', FALSE, 2);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Merlot', '/img/pets/Merlot_01_450x600.jpg', '2|3', TRUE, E'He\'s a little angel.', FALSE, 1);
INSERT INTO pets (pet_name, pet_thumbnail_url, pet_age, pet_vaccination_status, pet_adoption_story, pet_adoption_status, pet_type_id)
  VALUES ('Shadow', '/img/pets/Shadow_01_450x600.jpg', '1|10', TRUE, E'He\'s handsome goofball.', FALSE, 4);
