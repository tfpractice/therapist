const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const axios = require('axios-https-proxy-fix');
const medium = require('medium-sdk');
const babel = require('babel-register')();
const https = require('https');

const mUtils = require('./utils/medium/connect');

const { mediumAPiUrl, params, config } = require('./utils/medium/creds');

const app = express();

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
const connect = () =>
  axios
    .get(mediumAPiUrl, { ...config, params })
    .then((api) => {
      console.log('params', api);
    })
    .catch((apiErr) => {
      console.log('apiErr', apiErr);
      console.error(apiErr.config);
    });

app.get('/auth', (req, res) => {
  console.log('=============auth=============');
  console.log('res', req.hostname, req.protocol);
  console.log('req.params', req.params);
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  console.log('req.url', req.url, req.baseUrl, req.originalUrl);

  // console.log('req.res,', req.res, req.route);
  // console.log('Object,keys(req)', Object.keys(req));

  connect().then((r2) => {
    console.log('r2', r2);
    res.json({ data: {}});
  });

  // mUtils
  //   .connect()
  //   .then((mRes) => {
  //     console.log('mRes', mRes);
  //     res.json({ data: {}});
  //   })
  //   .catch((err) => {
  //     console.error(err.message);
  //   });
});

// .withCredentials();
app.use('/callback/medium', (req, res) => {
  console.log('=============connected=============');
  res.json({});

  // res.send('index.html');
});

app.get('/', (req, res) => {
  console.log('=============main=============');

  res.send('index.html');
});

app.use(express.static(path.resolve('build')));

app.listen(4000, () => {
  console.log('NAtahsa site listening on port 4000!');
});

// https.createServer({}, app).listen(443);

module.exports = app;
