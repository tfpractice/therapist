const express = require('express');
const path = require('path');
const axios = require('axios');
const medium = require('medium-sdk');

const mediumAPiUrl = 'https://medium.com/m/oauth/authorize?';

const CLIENT_ID = process.env.REACT_APP_NATASHA_EDWARDS_MEDIUM_CLIENT_ID;

const SECRET = process.env.REACT_APP_NATASHA_EDWARDS_MEDIUM_CLIENT_SECRET;

const client = new medium.MediumClient({
  clientId: CLIENT_ID,
  clientSecret: SECRET,
});

const scope = 'basicProfile, publishPost, listPublications';

const state = 'test';

const response_type = 'code';

// const redirect_uri = 'localhost:3000/callback/medium';

const redirect_uri = 'www.natasha_test.com';

const headers = { 'Access-Control-Allow-Origin': '*' };

const url = client.getAuthorizationUrl(state, redirect_uri, [
  medium.Scope.BASIC_PROFILE,
  medium.Scope.LIST_PUBLICATIONS,
]);

const params = {
  CLIENT_ID,
  SECRET,
  scope,
  state,
  response_type,
  redirect_uri,
};

const withCredentials = 'true';

const connect = () =>
  axios
    .get(url)
    .then((res) => {
      console.log('res', res);
    })
    .catch(e => console.error('some error', e.message));

const app = express();

app.use('/callback/medium?', (req, res) => {
  console.log('connected');
  console.log('resolve', req);
  res.send('index.html');
});
app.get('/', (req, res) => {
  console.log('post');
  console.log('resolve', req);
  res.send('index.html');
});

app.use(express.static(path.resolve('build')));

app.listen(4000, () => {
  // console.log('NAtahsa site listening on port 3000!');
  // connect();
});

module.exports = app;
