# Student Resource Library Backend

This is the backend repository for Team Undefined's project entitled Student Resource Library, created during week 9 of the School of Code. The app aims to aid School of Code bootcampers in navigating bootcamper-provided tech links, as well as enabling coaches and bootcampers to submit more resources to the database. The links are displayed in a table consisting of link, topic and name columns, with a filter-by-topic drop down and an upvote button/count. 

### To run locally 

* Move into your directory of choice: `cd ~/YOUR_DIRECTORY`
* Clone this repository: `git clone https://github.com/SchoolOfCode/w9_backend-project-team-is-undefined.git`
* Move into the project directory: `cd w9_backend-project-team-is-undefined`
* Install the dependencies: `npm install`

### Working on the project

* Move into the project directory as above.
* Run the development task: `npm run dev`
    * Starts a server running at http://localhost:9000
    * Automatically restarts when any of your files change

## Database

This project is connected to a postgreSQL database using Heroku.

## Running tests
This repository contains a handful of SuperTest tests within a test file located in the routes folder.
* To run these: `npm run test`



