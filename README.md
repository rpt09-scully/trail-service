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
  $> mysql -uroot < schema.sql  
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

[ tbd ]
