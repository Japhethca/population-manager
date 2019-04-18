[![Coverage Status](https://coveralls.io/repos/github/Japhethca/population-manager/badge.svg?branch=master)](https://coveralls.io/github/Japhethca/population-manager?branch=master)
## Population Managment API
Implements an API for managing the population of a given location.

## Getting Started

### Setup
- clone repository: https://github.com/Japhethca/population-manager.git
- change directory to cloned repository `cd population-manager`
- run `yarn install` to install dependencies
- setup `.env` using template in `.env_sample` file
- run database migration with `yarn db:migrate`
- run `yarn dev` to start developement server or `yarn start` to start production server
- test api endpoints on `http://localhost:3400/api/v1/`

### Test
Ensure you have setup your local `.env` file before continuing with test.
To start test,
- run `yarn test` or `yarn test:watch` to run test in watch mode.
- run `yarn test:coverage` to display test coverage


### API Documentation
[Go to Documentation](https://documenter.getpostman.com/view/2668539/S1EQUyA4)
