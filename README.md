# testWM

Test for Wal-Mart labs.

`export MONGO_URL` to environment for cloud storage
####(will default to localhost otherwise. Needs MongoDB installed and running locally if this is the case.)

Use the command `mongod` from a terminal to ensure MongoDB is running

##Built on Node.js v5.8
If you do not have node and npm install them from http://nodejs.org/

Once you have them, run `npm install` from command line to install Node packages.

`postinstall` script runs automatically to cover the rest of development procedure.
(`postinstall`: `bower i` to install bower packages, `gulp dev` to generate CSS, HTML templates, move images from **src** to **public** and populate database, and `webpack` to bundle the JavaScript.)

`npm start` will launch the server to run the application.

For debugging purposes there are two tests, one to determine if server connection is established,
one to test if the database contains the proper data.
`npm test` will run both tests.
