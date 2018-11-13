DROP DATABASE IF EXISTS trailService;

CREATE DATABASE trailService;

USE trailService;

CREATE TABLE trail (
  trail_id int NOT NULL,
  trail_name varchar(55) NOT NULL,
  distance int,
  elevation_gain int,
  description varchar(600),
  route_type varchar(20),
  difficulty varchar(15),
  general_area varchar(40),
  PRIMARY KEY (trail_id)
) ENGINE=InnoDB;

CREATE TABLE tags (
  tag_id int NOT NULL AUTO_INCREMENT,
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