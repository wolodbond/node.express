# FACENET - a simple social network

Just short.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

sorry, no docker-compose. i know it's crime

install node version 10
npm i

Install docker
docker pull redis
docker pull mongo

or

use redis and mongo that installed on your OS

and

use env-example file

### Installing

download from git repo

docker run -d --name facenet-redis-container -p 127.0.0.1:6379:6379 redis
docker run --name facenet-mongo --rm -p 127.0.0.1:27017:27017 -d mongo:latest mongod

## Running the tests

npm start
npm run test - for run all tests with code coverage
npm run docs - for make documentation
