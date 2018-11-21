# Trail Service

Trail service for 9 Trails

## Related Projects

* paths: https://github.com/rpt09-scully/paths-service
* profiles: https://github.com/rpt09-scully/profile-service
* photos: https://github.com/rpt09-scully/trail-photos-service
* trail:  [Current]
* reviews: https://github.com/rpt09-scully/reviews-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [Log](#Log)

## Usage

> See Bernie for details.

## Requirements

[ tbd ]

## Development

To set up:

  ``` sh
  # cd into directory
  $> cd trail-service
  # install dependencies
  $> npm install
  # setup .env file (for sql creds)
  $> touch .env 
  # seed database `trailService` (change credentials as needed)  
  # you can either run  
  $> npm seed-database  
  # which executes mysql -u root -p < schema.sql  
  # OR you can simply run  
  $> mysql -uroot < schema.sql  
  # from the command line, use or modify the `root` users as needed
  ```

  Inside `.env` place your SQL credentials (change if needed)  
  ``` 
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=
  ```

  To execute:

  ``` sh
  $> npm run server-dev
  ```

### Installing Dependencies

```sh
$> npm install
```

## Log

### 2018-11-21 

* server.test.js instal dependencies, add server app tests

### 2018-11-19 
* Add static route, clean up previous branches
* Testing dependencies (`test` directory, install Mocha, Chai)
* db.test.js - tests for MySQL query functions in Knex
