DROP DATABASE IF EXISTS trailService;

CREATE DATABASE trailService;

USE trailService;

CREATE TABLE trail (
  trail_id int NOT NULL,
  trail_name varchar(75) NOT NULL,
  distance int,
  distance_units varchar(10),
  elevation_gain int,
  elevation_units varchar(5),
  description varchar(700),
  route_type varchar(20),
  difficulty varchar(15),
  general_area varchar(70),
  origin varchar(100),
  PRIMARY KEY (trail_id)
) ENGINE=InnoDB;

CREATE TABLE tags (
  tag_id int NOT NULL,
  tag_name varchar(30) NOT NULL,
  PRIMARY KEY (tag_id)
) ENGINE=InnoDB;

CREATE TABLE trail_tags (
  trail_id int NOT NULL,
  tag_id int NOT NULL,
  PRIMARY KEY (trail_id, tag_id),
  FOREIGN KEY (trail_id) REFERENCES trail (trail_id),
  FOREIGN KEY (tag_id) REFERENCES tags (tag_id)
) ENGINE=InnoDB;


INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (1, "Golden Gate Park Trail", 6.1, "miles", 351, "ft", "Golden Gate Park Trail is a Bernie favorite. A 6.1 mile heavily trafficked loop trail located near San Francisco, California that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be approved by Bernie.", "Loop", "Easy", "Golden Gate Park", "https://www.alltrails.com/trail/us/california/golden-gate-park-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (2, "Crescent Creek Trail", 10.9, "miles", 1581, "ft", "Crescent Creek Trail is a 10.9 mile moderately trafficked out and back trail located near Moose Pass, Alaska that features a lake. The trail is rated as moderate and primarily used for hiking, camping, and backpacking. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Moderate", "Chugach National Forest", "https://www.alltrails.com/trail/us/alaska/crescent-creek-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (3, "Hope Point", 7.5, "miles", 3441, "ft", "Hope Point is a 7.5 mile moderately trafficked out and back trail located near Hope, Alaska that offers scenic views and is rated as moderate. The trail is primarily used for hiking and nature trips and is best used from May until October. Dogs are also able to use this trail, with prior approval from Bernie.", "Out & Back", "Moderate", "Chugach National Forest", "https://www.alltrails.com/trail/us/alaska/hope-point");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (4, "Lost Lake Trail", 22.2, "km", 802, "m", "Lost Lake Trail is a 22.2 kilometer lightly trafficked out and back trail located near Seward, Alaska that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from May until September. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Moderate", "Chugach National Forest", "https://www.alltrails.com/trail/us/alaska/lost-lake-trail--2");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (5, "Palmer Creek Lakes", 2.7, "miles", 921, "ft", "Palmer Creek Lakes is a 2.7 mile lightly trafficked out and back trail located near Indian, Alaska that features a lake. The trail is good for all skill levels and primarily used for hiking. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Easy", "Chugach National Forest", "https://www.alltrails.com/trail/us/alaska/palmer-creek-lakes");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (6, "Resurrection Pass Trail", 36.2, "miles", 4767, "ft", "Resurrection Pass Trail is a 36.2 mile lightly trafficked point-to-point trail located near Cooper Landing, Alaska that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from June until September. Dogs are also able to use this trail but must be kept on leash.", "Point to Point", "Moderate", "Chugach National Forest", "https://www.alltrails.com/trail/us/alaska/resurrection-pass-trail--2");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (7, "Alamere Falls via Coast Trail from Palomarin Trailhead", 8.8, "miles", 1335, "ft", "Alamere Falls via Coast Trail from Palomarin Trailhead is a 8.8 mile heavily trafficked out and back trail located near Bolinas, California that features a lake and is rated as moderate. The trail is primarily used for hiking, nature trips, and birding and is best used from October until December.", "Out & Back", "Moderate", "Point Reyes National Seashore", "https://www.alltrails.com/trail/us/california/alamere-falls-via-coast-trail-from-palomarin-trailhead");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (8, "Coast Camp/Laguna Loop", 5.8, "miles", 488, "ft", "Coast Camp/Laguna Loop is a 5.8 mile heavily trafficked loop trail located near Point Reyes Station, California that features a river and is rated as moderate. The trail offers a number of activity options and is accessible year-round.", "Loop", "Moderate", "Point Reyes National Seashore", "https://www.alltrails.com/trail/us/california/coast-camp-laguna-loop");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (9, "Presidio Bay Area Ridge Trail", 2.6, "miles", 170, "ft", "Bernie likes this one. Presidio Bay Area Ridge Trail is a 2.6 mile moderately trafficked out and back trail located near San Francisco, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs and horses are also able to use this trail.", "Out & Back", "Easy", "Presidio of San Francisco", "https://www.alltrails.com/trail/us/california/presidio-bay-area-ridge-trail--3");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (10, "Presidio Ecology Trail", 1.5, "miles", 223, "ft", "Presidio Ecology Trail is a 1.5 mile moderately trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.", "Loop", "Easy", "Presidio of San Francisco", "https://www.alltrails.com/trail/us/california/presidio-ecology-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (11, "BeltLine Eastside Trail From Piedmont Park", 7.0, "miles", 374, "ft", "BeltLine Eastside Trail From Piedmont Park is a 7 mile heavily trafficked out and back trail located near Atlanta, Georgia that features a great forest setting and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Easy", "Piedmont Park", "https://www.alltrails.com/trail/us/georgia/beltline-eastside-trail-from-piedmont-park");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (12, "Bull Sluice Lake", 2.1, "miles", 193, "ft", "Bull Sluice Lake is a 2.1 mile moderately trafficked loop trail located near Atlanta, Georgia that features a river and is good for all skill levels. The trail is primarily used for hiking and fishing and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.", "Loop", "Easy", "Chattahoochee River National Recreation Area", "https://www.alltrails.com/trail/us/georgia/bull-sluice-lake");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (13, "Cascade Springs Nature Preserve Outer Loop", 1.5, "miles", 127, "ft", "Cascade Springs Nature Preserve Outer Loop is a 1.5 mile lightly trafficked loop trail located near Atlanta, Georgia that offers the chance to see wildlife. The trail is good for all skill levels and primarily used for hiking and trail running. Dogs are also able to use this trail but must be kept on leash.", "Loop", "Easy", "Atlanta, Georgia", "https://www.alltrails.com/trail/us/georgia/cascade-springs-nature-preserve-outer-loop");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (14, "Chastain Park Trail", 2.5, "miles", 209, "ft", "Chastain Park Trail  is a 2.5 mile lightly trafficked loop trail located near Atlanta, Georgia that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", "Loop", "Easy", "Chastain Memorial Park", "https://www.alltrails.com/trail/us/georgia/chastain-park-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (15, "Grant Park Loop Trail", 1.4, "miles", 95, "ft", "Grant Park Loop Trail is a 1.4 mile moderately trafficked loop trail located near Atlanta, Georgia that features a great forest setting and is good for all skill levels. The trail is primarily used for hiking, walking, trail running, and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", "Loop", "Easy", "Grant Park", "https://www.alltrails.com/trail/us/georgia/grant-park-loop-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (16, "Canyon Trail to Waipoo Falls", 3.2, "miles", 1210, "ft", "Canyon Trail to Waipoo Falls is a 3.2 mile lightly trafficked out and back trail located near Kekaha, Hawaii that features a waterfall and is rated as moderate. The trail offers a number of activity options and is accessible year-round.", "Out & Back", "Moderate", "Koke's State Park", "https://www.alltrails.com/trail/us/hawaii/canyon-trail-to-waipoo-falls");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (17, "Kaiwa Ridge (Pillbox) Trail", 3.2, "miles", 1246, "ft", "Kaiwa Ridge (Pillbox) Trail is a 3.2 mile moderately trafficked out and back trail located near Kailua, Hawaii that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, and trail running and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Moderate", "Kailua Beach Park", "https://www.alltrails.com/trail/us/hawaii/kaiwa-ridge-pillbox-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (18, "Makapu'u Point Lighthouse Trail (Kaiwi)", 3.2, "miles", 807, "ft", "Makapu'u Point Lighthouse Trail (Kaiwi) is a 3.2 mile heavily trafficked out and back trail located near Honolulu, Hawaii that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Easy", "Makapu'u Point State Wayside", "https://www.alltrails.com/trail/us/hawaii/makapuu-point-lighthouse-trail-kaiwi");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (19, "Na Pali Coast (Kalalau) Trail", 22.0, "miles", 6177, "ft", "Na Pali Coast (Kalalau) Trail  is a 22 mile moderately trafficked out and back trail located near Haena, Hawaii that features a waterfall and is only recommended for very experienced adventurers. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.", "Out & Back", "Hard", "Napali Coast State Park", "https://www.alltrails.com/trail/us/hawaii/na-pali-coast-kalalau-trail");
INSERT INTO trail (trail_id, trail_name, distance, distance_units, elevation_gain, elevation_units, description, route_type, difficulty, general_area, origin) VALUES (20, "Wiliwilinui Bernie Ridge Trail", 4.5, "miles", 1597, "ft", "Wiliwilinui Ridge Trail is a 4.5 mile out and back trail located near Honolulu, Hawaii that offers the chance to see wildlife and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", "Out & Back", "Moderate", "Honolulu, Hawaii", "https://www.alltrails.com/trail/us/hawaii/wiliwilinui-ridge-trail");

INSERT INTO tags (tag_id, tag_name) VALUES (1, "dogs on leash");
INSERT INTO tags (tag_id, tag_name) VALUES (2, "hiking");
INSERT INTO tags (tag_id, tag_name) VALUES (3, "mountain biking");
INSERT INTO tags (tag_id, tag_name) VALUES (4, "trail running");
INSERT INTO tags (tag_id, tag_name) VALUES (5, "walking");
INSERT INTO tags (tag_id, tag_name) VALUES (6, "views");
INSERT INTO tags (tag_id, tag_name) VALUES (7, "wildlife");
INSERT INTO tags (tag_id, tag_name) VALUES (8, "muddy");
INSERT INTO tags (tag_id, tag_name) VALUES (9, "dog friendly");
INSERT INTO tags (tag_id, tag_name) VALUES (10, "backpacking");
INSERT INTO tags (tag_id, tag_name) VALUES (11, "birding");
INSERT INTO tags (tag_id, tag_name) VALUES (12, "camping");
INSERT INTO tags (tag_id, tag_name) VALUES (13, "nature trips");
INSERT INTO tags (tag_id, tag_name) VALUES (14, "paddle sports");
INSERT INTO tags (tag_id, tag_name) VALUES (15, "beach");
INSERT INTO tags (tag_id, tag_name) VALUES (16, "cave");
INSERT INTO tags (tag_id, tag_name) VALUES (17, "forest");
INSERT INTO tags (tag_id, tag_name) VALUES (18, "river");
INSERT INTO tags (tag_id, tag_name) VALUES (19, "waterfall");
INSERT INTO tags (tag_id, tag_name) VALUES (20, "bugs");
INSERT INTO tags (tag_id, tag_name) VALUES (21, "historic site");
INSERT INTO tags (tag_id, tag_name) VALUES (22, "wildlife");
INSERT INTO tags (tag_id, tag_name) VALUES (23, "rocky");
INSERT INTO tags (tag_id, tag_name) VALUES (24, "kid friendly");
INSERT INTO tags (tag_id, tag_name) VALUES (25, "no shade");
INSERT INTO tags (tag_id, tag_name) VALUES (26, "wheelchair friendly");
INSERT INTO tags (tag_id, tag_name) VALUES (27, "wild flowers");
INSERT INTO tags (tag_id, tag_name) VALUES (28, "lake");
INSERT INTO tags (tag_id, tag_name) VALUES (29, "paved");
INSERT INTO tags (tag_id, tag_name) VALUES (30, "road biking");

INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 8);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (1, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 8);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 28);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 26);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (2, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 15);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 16);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 17);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (3, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 23);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 25);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 26);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 27);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 28);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 29);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (4, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 15);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (5, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 29);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 28);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 27);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 26);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 25);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 23);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (6, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 17);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 16);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 15);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (7, 8);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 8);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 29);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (8, 28);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 17);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 29);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 26);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (9, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 29);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 28);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (10, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 16);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (11, 18);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 8);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (12, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 29);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 27);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 25);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 23);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 19);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 17);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 15);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (13, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 28);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 26);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 23);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (14, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 15);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 17);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 19);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (15, 23);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 8);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 16);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 18);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 20);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (16, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 27);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 30);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (17, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 25);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 24);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 23);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 22);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 21);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 20);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 19);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 26);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (18, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 9);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 10);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 11);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 12);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 13);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 14);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 15);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 16);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 17);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (19, 18);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 1);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 2);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 3);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 4);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 5);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 6);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 7);
INSERT INTO trail_tags (trail_id, tag_id) VALUES (20, 8);
