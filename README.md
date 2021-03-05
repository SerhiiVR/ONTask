<p align="center">
 GET: http://localhost:3000/api/books?limit=60&start=0<br>
 POST: http://localhost:3000/api/books<br>
 Swagger: http://localhost:3000/api/<br>

 JSON {"name" : "BookName"} or [{"name" : "BookName1"},{"name" : "BookName2"},{"name" : "BookName3"}]
</p>


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
