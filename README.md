# testWM

Test for Wal-Mart labs.

`export MONGO_URL` to environment for cloud storage
####(will default to localhost otherwise. Need MongoDB installed and running locally if this is the case.)

##Built on Node.js v5.8
If you do not have node or npm install it from http://nodejs.org/

`npm install` will install packages.
`postinstall` script runs automatically to cover the rest of development procedure.
`postinstall`: `bower i` to install bower packages and `gulp dev` to generate CSS, HTML templates, and populate database.

`npm start` will launch the server to run the application.

For debugging purposes there are two tests, one to determine if server connection is established,
One to test if the database is loaded.
`npm test` will run both tests.
