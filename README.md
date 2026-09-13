# Timestamp Microservice

A full-stack JavaScript Timestamp Microservice built with Node.js and Express.

## Features

- Convert dates to Unix timestamps
- Convert Unix timestamps to UTC dates
- Return the current timestamp
- Detect invalid dates
- REST API endpoint
- Simple web interface

## API

### Current date

GET:

/api/

### Date string

GET:

/api/2015-12-25

Example response:

{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

### Unix timestamp

GET:

/api/1451001600000

Example response:

{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

### Invalid date

GET:

/api/hello

Response:

{
  "error": "Invalid Date"
}

## Running locally

Install dependencies:

npm install

Start the server:

npm start

The application will run on:

http://localhost:3000
