const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob; //eslint-disable-line

const {
  uploadResultToDatabase, //eslint-disable-line
  uploadFlowDataToDatabase, //eslint-disable-line
  uploadClassHydrographToDatabase, //eslint-disable-line
  uploadGaugeHydrographToDatabase, //eslint-disable-line
} = require('./utils/uploadToDatabase');

const allowed_header = [
  'http://localhost:4000',
  'http://localhost:3000',
  'http://eflows.ucdavis.edu/',
  'https://eflows.ucdavis.edu/',
  'http://environmentalflows.ucdavis.edu',
  'https://environmentalflows.ucdavis.edu',
];

const app = express();

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowed_header.indexOf(origin) > -1) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, gutsyJwt, Accept'
  );
  next();
});

app.io = require('socket.io')({
  origins: allowed_header,
  transports: ['websocket'],
});

app.io.on('connection', () => {
  console.log('a user connected'); //eslint-disable-line
});

app.disable('etag');

// new CronJob( // eslint-disable-line
//   '0 * * * * *',
//   () => {
//     uploadResultToDatabase();
//   },
//   null,
//   true,
//   'America/Los_Angeles'
// );

// new CronJob( // eslint-disable-line
//   '15 * * * * *',
//   () => {
//     uploadFlowDataToDatabase();
//   },
//   null,
//   true,
//   'America/Los_Angeles'
// );

// new CronJob( // eslint-disable-line
//   '30 * * * * *',
//   () => {
//     uploadClassHydrographToDatabase();
//   },
//   null,
//   true,
//   'America/Los_Angeles'
// );

// new CronJob( // eslint-disable-line
//   '0 * * * * *',
//   () => {
//     uploadGaugeHydrographToDatabase();
//   },
//   null,
//   true,
//   'America/Los_Angeles'
// );

require('./routes')(app);

module.exports = app;
