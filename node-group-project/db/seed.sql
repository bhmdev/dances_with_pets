INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('domesticated', 'cat', 'domestic short hair', '/img/types/domestic-short-hair.jpg', 'A cat of mixed ancestry, thus not belonging to any particular recognized cat breed, possessing a coat of short fur.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('domesticated', 'cat', 'domestic medium hair', '/img/types/domestic-medium-hair.jpg', 'A fluffy and docile cat, the domestic medium-hair is the perfect hybrid of his domestic short- and longhair relatives.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('domesticated', 'cat', 'domestic long hair', '/img/types/domestic-long-hair.jpg', 'A cat of mixed ancestry, thus not belonging to any particular recognised cat breed, possessing a coat of semi-long to long fur.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('domesticated', 'dog', 'german shepherd', '/img/types/german-shepherd.jpg', 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('domesticated', 'dog', 'maltipoo', '/img/types/maltipoo.jpg', 'The Maltipoo is a popular cross of the Maltese and Poodle, known for their fun-loving and affectionate nature.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('exotic', 'raccoon', 'upper mississippi valley raccoon', '/img/types/upper-mississippi-valley.jpg', 'The Procyon lotor hirtus, is an exceptionally large raccoon with a buff coat that has colonized the American Midwest.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('exotic', 'tiger', 'siberian tiger', '/img/types/siberian-tiger.jpg', 'The Siberian tiger is a tiger from a specific population of the Panthera tigris tigris subspecies that is native to the Russian Far East, Northeast China, and possibly North Korea.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('mythical', 'phoenix', 'greek phoenix', '/img/types/greek-phoenix.jpg', 'A bird that can live for a long time and also be reborn from the ashes of its predecessor.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('mythical', 'dragon', 'slavic dragon', '/img/types/slavic-dragon.jpg', 'A Slavic dragon is any dragon in Slavic mythology, including the Russian zmei, the Slovak drak and sarkan, Czech drak, Polish zmij, the Serbian and Croatian zmaj, the Macedonian zmey.');
INSERT INTO pet_types (classification, type, breed, breed_img_url, description)
  VALUES ('mythical', 'taco monkey', 'banana taco monkey', '/img/types/taco-monkey.jpg', E'The rare and ellusive taco monkey is a coveted pet amongst the Launchers. Legends say that if you catch one it\'ll tell you what\'s on a system check. The banana species of taco monkeys also eat bananas.');

INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Fiona', '/img/pets/Fiona_01_450x600.png', '12|2', TRUE, E'She\'s a princess.', 'Fiona is a cute and sleepy ball of fluff and cuddles. She deserves a good home!.', FALSE, 5);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Midnight', '/img/pets/Midnight_01_450x600.jpg', '20|0', TRUE, E'She\'s a queen.', E'Midnight is fabulous and photogenic. If you\'re looking for the next #meowdel, look no further!', FALSE, 1);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Mimosa', '/img/pets/Mimosa_01_450x600.jpg', '1|4', TRUE, E'She\'s a ferocious cuddler.', 'Mimosa loves to sleep and play. She is feisty and has a super cute, kittenesque face!', FALSE, 2);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Merlot', '/img/pets/Merlot_01_450x600.jpg', '2|3', TRUE, E'He\'s a little angel.', 'Merlot is an extremely affectionate kitty that loves to cuddle. Be prepared to have your heart captured!', FALSE, 1);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Shadow', '/img/pets/Shadow_01_450x600.jpg', '1|10', TRUE, E'He\'s handsome goofball.', 'Boundless energy and joy accompanies this puppy! If you want a hiking buddy, then Shadow is the pup for you!', FALSE, 4);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Cooper', '/img/pets/Cooper_01_450x600.jpg', '0|4', FALSE, E'Perhaps the cutest trash panda you\'ll ever meet!', 'Cooper is a cute little fluffball with claws. He loves cheese and Cheetos!', FALSE, 6);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Felix', '/img/pets/Felix_01_450x600.jpg', '1185|11', FALSE, 'In Soviet Russia, pet outlives you!', 'Believed to only be on this 3rd life, Felix is quite young. Felix the phoenix is guaranteed to bring some light and joy into your life!', FALSE, 8);
INSERT INTO pets (name, pet_img_url, age, vaccination_status, description, adoption_story, adoption_status, pet_type_id)
  VALUES ('Pon Rerlman', '/img/pets/Pon-Rerlman_01_450x600.jpg', '421|0', FALSE, 'A TacoMonkey, what more can you ask for?', 'Pon Rerlman, sometimes known as Pon Pon, is the life of the party. He will steal your heart and your tacos!', FALSE, 10);

INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Tom Murphy', '707-555-8666', 'murphy-codes@github.com', 'rent', 'pending', 5);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Russ Moore', '415-555-7877', 'wrmoore@github.com', 'rent', 'pending', 2);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Brendan M', '617-555-2626', 'bhmdev@github.com', 'own', 'pending', 1);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Dan Alberts', '617-555-3286', 'danalberts@github.com', 'rent', 'denied', 6);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Patrick Whelan', '617-555-7973', 'prophetsfall@github.com', 'own', 'pending', 7);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Monica Gonzalez', '805-555-6466', 'mandm@cutepetexamples.com', 'rent', 'pending', 3);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Monica Gonzalez', '805-555-6466', 'mandm@cutepetexamples.com', 'rent', 'pending', 4);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Dan Alberts', '617-555-3286', 'danalberts@github.com', 'rent', 'pending', 6);
INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id)
  VALUES ('Dan Alberts', '617-555-3286', 'danalberts@github.com', 'rent', 'pending', 8);

INSERT INTO surrender_applications (name, phone_number, email, pet_name, pet_type_id, pet_img_url, pet_age, vaccination_status, description,  adoption_story, application_status)
  VALUES ('Dan Alberts', '617-555-3286', 'danalberts@github.com', 'Rocket', 6, '/img/pets/Rocket_01_450x600.jpg', '7|2', FALSE, 'Rocket is a VERY intelligent raccoon.', E'Rocket\'s a great guy, but he\'s just a bit too much to handle and kind of has an explosive personality.', 'pending');