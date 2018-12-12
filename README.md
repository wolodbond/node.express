# FACENET - a simple social network

Just short.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

sorry, no docker-compose. i know it's crime <br/>

install node version 10 <br/>
npm i <br/>

Install docker <br/>
docker pull redis <br/>
docker pull mongo <br/>

or

use redis and mongo that installed on your OS

and

use env-example file

### Installing

download from git repo

docker run -d --name facenet-redis-container -p 127.0.0.1:6379:6379 redis <br/>
docker run --name facenet-mongo --rm -p 127.0.0.1:27017:27017 -d mongo:latest mongod <br/>

## Running app and the tests

npm start <br/>
npm run test - for run all tests with code coverage <br/>
npm run docs - for make documentation <br/>
