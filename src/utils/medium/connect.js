import axios from 'axios';
import wFetch from 'node-fetch';

import {
  CLIENT_ID,
  SECRET,
  code,
  grant_type,
  Authorization,
  redirect_uri,
  headers,
  url,
  config,
  pubURL,
  tokenURL,
  meURL,
} from './creds';

export const mConnect = () =>
  axios
    .get('/auth')
    .then((res) => {
      console.log('auth res', res);
      return res;
    })
    .catch((e) => {
      console.error('some mconnect error');
      console.error(e);
    });

export const connect = () =>
  axios
    .get(url, config)
    .then((res) => {
      console.log('connecting');
      console.log('res', res);
      return res;
    })
    .catch(e => console.error('some connect error', e));

export const getToken = (c = code) =>
  axios
    .post(
      tokenURL,

      {
        ...config,
        data: {
          client_id: CLIENT_ID,
          client_secret: SECRET,
          code,
          grant_type,
          redirect_uri,
        },
      }
    )
    .then(res => console.log('res``', res))
    .catch((err) => {
      console.log('err.response', err.response.data);
    });

export const getMe = () =>
  axios
    .get(meURL, { headers: { Authorization: `Bearer 2787611f89878cf9d7e68a52641c8906f810fd0d00081f9e1fbbe57806309d7f6` }})
    .then((res) => {
      console.log('resolveres', res);
    })
    .catch((err) => {
      console.error(err);
    });

export const getPublications = () =>
  axios
    .get(pubURL, { headers: { ...headers, Authorization }})
    .then(res => console.log('resolve', res))
    .catch((err) => {
      console.error(err);
    });
