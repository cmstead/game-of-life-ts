# Conway's Game of Life #

This purpose of this project is provide a foundation for creating Conway's Game of Life as a console application using TypeScript. This is intended to be forked and cloned rather than committed to as the code project for an interactive dojo or workshop. This project may or may not be acceptable for any purpose. Please do not use anything here as the foundation for a production application.

## Setup ##

1. Make sure you have Node.js installed
2. Install [Gittey](https://www.npmjs.com/package/gittey)
3. Run `npm install` in the directory where this readme resides

## Running Things ##

1. Run the application: `npm run start`
2. Run the tests: `npm test`

## What's in the box? ##

1. This readme
2. License: An MIT license doc
3. Package Configuration: A basic npm package.json
4. Jest: A TypeScript configured Jest configuration file
5. TypeScript Configuration: A tsconfig.json file with decorators enabled
6. Tests: A tests directory with tests for the display code (usable as examples of automated tests)
7. Display Module: The source code and types for the display module (in the display directory)
8. Index TS File: An index file that throws an error

## Rules of Conway's Game of Life ##

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Helpful Resources ##

* [An introduction to Mob Programming](https://www.youtube.com/watch?v=8cy64qkgTyI)
