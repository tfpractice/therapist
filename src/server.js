const bodyParser = require('body-parser');
const spdy = require('spdy');
const express = require('express');
const path = require('path');
const request = require('request');
const axios = require('axios');
const medium = require('medium-sdk');
const babel = require('babel-register')();
const https = require('https');
const tunnel = require('tunnel');
const fs = require('fs');

const ssl = require('../ssl');
const mUtils = require('./utils/medium/connect');

const {
  mediumAPiUrl,
  params,
  agent,
  authUrl,
  myClient,
  url,
  auth,
  config,
  port,
} = require('./utils/medium/creds');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.json({ limit: '20mb' }));

app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
const connect = () =>
  axios
    .get(url, config)

    .then((api) => {
      console.log('params', api);
      return api;
    })
    .catch((apiErr) => {
      console.log('apiErr');
    });

app.get('/auth', (req, res) => {
  console.log('=============auth=============');
  console.log('res', req.hostname, req.port, req.protocol);
  console.log('req.params', req.params);
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  console.log('req.url', req.url, req.baseUrl, req.originalUrl);

  mUtils
    .connect()
    .then((res1) => {
      console.log('res', res1);
      res.json({});
    })
    .catch((err) => {
      console.error(err);
    });
});

app.use('/callback/medium', (req, res) => {
  console.log('=============connected=============');
  console.log('res', req.hostname, req.protocol);
  console.log('req.params', req.params);
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  console.log('req.url', req.url, req.baseUrl, req.originalUrl);
  mUtils
    .getToken(req.query.code)
    .then((token) => {
      console.log('token', token);
      res.json(req.query);
    })
    .catch(E => console.error(E));
});

app.get('/', (req, res) => {
  console.log('=============main=============');

  res.send('index.html');
});

app.use(express.static(path.resolve('build')));

app.listen(4000, () => {
  console.log('NAtahsa site listening on port 4000!');
});
console.log(
  'process.env.REACT_APP_PROXY_PASS',
  process.env.REACT_APP_PROXY_PASS
);
const options = {
  ssl,
  port,

  ecdhCurve: 'auto',
  passphrase: process.env.REACT_APP_PROXY_PASS,

  'x-forwarded-for': true,
  ciphers: 'ALL',
  rejectUnauthorized: false,
};

const server = spdy
  .createServer({ ...options, ...ssl }, app)
  .listen(443, () => {
    console.log('server', server);
    console.log(`Express server listening on port ${server.address().port}`);
  });

module.exports = app;
