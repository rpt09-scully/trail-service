# Trail Service

Trail service for Nine Trails Hack Reactor <abbr title="Front End Capstone">FEC</abbr> project. Supplies an API endpoint for trail detail data at `/:trailId/trailInfo` on `port 3001`.

## Contents

<!-- TOC updateOnSave:false -->
  * [Motivation](#motivation)
  * [Related Projects](#related-projects)
  * [Code Style](#code-style)
  * [Tech/Frameworks used](#techframeworks-used)
  * [Code Example](#code-example)
  * [Installation](#installation)
    * [Installing Dependencies](#installing-dependencies)
    * [Setup](#setup)
  * [API Reference](#api-reference)
    * [Internal End Points](#internal-endpoints)  
  * [Tests](#tests)
  * [Notes](#notes)
<!-- /TOC -->

## Motivation

Part of the Team Scully FEC project implementing different services to be consumed by a proxy page representing a product detail page about hiking trails.

## Related Projects

* [paths-service](https://github.com/rpt09-scully/paths-service)
* [profiles-service](https://github.com/rpt09-scully/profile-service)
* [trail-photos-service](https://github.com/rpt09-scully/trail-photos-service)
* trail-service: [Current]
* [reviews-service](https://github.com/rpt09-scully/reviews-service)

## Code Style Guide

[![Style Guide: Hack Reactor](https://img.shields.io/badge/Style%20Guide-Hack%20Reactor-blue.svg)](https://github.com/hackreactor-labs/eslint-config-hackreactor)

## Tech/Frameworks used

* Database: [mySQL](https://dev.mysql.com/doc/refman/5.7/en/) & [knex](https://knexjs.org/)  
* Server: [Express](http://expressjs.com/), [axios](https://www.npmjs.com/package/axios)  
* Client: [React](https://reactjs.org/)

## Code Example

Example JSON response to `http:localhost:3001/1/trailInfo` for a trail with an ID of `1`:

```json
{
  "data": {
    "attributes": {
      "trail_name": "Golden Gate Park Trail",
      "distance": 6,
      "distance_units": "miles",
      "elevation_gain": 351,
      "elevation_units": "ft",
      "description": "Golden Gate Park Trail is a Bernie favorite. A 6.1 mile heavily trafficked loop trail located near San Francisco, California that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be approved by Bernie.",
      "route_type": "Loop",
      "difficulty": "Easy",
      "general_area": "Golden Gate Park",
      "origin": "https://www.alltrails.com/trail/us/california/golden-gate-park-trail",
      "tags": ["dogs on leash", "hiking", "mountain biking", "trail running", "walking", "views", "wildlife", "muddy", "dog friendly", "backpacking", "birding", "historic site"]
    },
    "id": "1",
    "type": "trail"
  }
}
```

Note: This structure _mostly_ follows the [JSON API](https://jsonapi.org/format/) specification. The team didn't get crazy with [relationships](https://jsonapi.org/format/#document-resource-object-relationships) so ¯\_(ツ)_/¯.  

## Installation

### Installing Dependencies

```sh
# cd into directory
$ cd trail-service
# install dependencies
$ npm install
```

### Setup

``` sh
# cd into directory
$ cd trail-service
# setup .env file (for sql creds)
$ touch .env 
# seed database `trailService` (change credentials as needed)  
# you can either run  
$ npm run seed-database  
# which executes mysql -u root -p < schema.sql  
# OR you can simply run  
$ mysql -u root < schema.sql
# note that you may use another user account if `root` access is not available
# from the command line, use or modify the `root` user as needed
```

Inside `.env` place your SQL credentials (change if needed)  
``` 
DB_HOST=localhost
DB_USER=root
DB_PASS=
```

To execute:

``` sh
$ npm run server-dev
```

## API Reference

This `trail-service` responds to requests for trail detail data when it receives a trail ID in the format `/:trailId/trailInfo`. See [code example](#code-example) above for response structure.

### Internal End Points

The `trail-service` API described above serves the other services in the project, see [Related Projects](#related-projects) above. The `/:trailId/banner` and `/:trailId/trailDescription` end points provide pre-shaped data responses to the two React components, `banner` and `traildescription`. Both of these additional end points are publicly available, but not intended to be consumed by other services in the [Related Projects](#related-projects).

## Tests

```sh
$ npm test
```

* * *

## Notes

