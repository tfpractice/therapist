import axios from 'axios';
import medium from 'medium-sdk';
import * as tunnel from 'tunnel';

export const host =
  process.env.HOST || process.env.REACT_APP_HOST || '127.0.0.1';

const port = 443 || process.env.PORT || process.env.REACT_APP_PORT || '4000';

export const pxPort = process.env.REACT_APP_PROXY_PORT;

export const CLIENT_ID = process.env.REACT_APP_NATASHA_EDWARDS_MEDIUM_CLIENT_ID;

export const SECRET =
  process.env.REACT_APP_NATASHA_EDWARDS_MEDIUM_CLIENT_SECRET;

export const client = new medium.MediumClient({
  clientId: CLIENT_ID,
  clientSecret: SECRET,
});

export const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

export const auth = {
  username: 'root',
  password: ' ',
};

export const proxy = {
  host,
  port,
  auth,
};
export const agent = tunnel.httpsOverHttp({
  proxy: {
    ...proxy,

    // proxyAuth: 'root: ',
  },
  keepAlive: true,
});

export const withCredentials = 'true';

export const config = {
  headers,

  proxy,
  auth,

  withCredentials,
};

export const myClient = axios.create({
  ...config,
  httpsAgent: agent,
});
export const mediumAPiUrl = 'https://medium.com/m/oauth/authorize?';

export const scope = 'basicProfile, listPublications';

export const state = 'test';

export const response_type = 'code';
export const redirect_uri = `http://${host}:${4000}/callback/medium`;
console.log('redirect_uri', redirect_uri);
export const access_token = `
  2787611f89878cf9d7e68a52641c8906f810fd0d00081f9e1fbbe57806309d7f6`;

export const refresh_token = `
  2b7543cbbd5125e33e0ea325059fddb4c74caa5f4775a12b4e1b844673203d244`;

export const userId =
  '17f7ad58bf1b6acf1c52b568ba61f945d320b353308429aec40de1f8abb78a728';

export const Authorization = `
  Bearer 2787611f89878cf9d7e68a52641c8906f810fd0d00081f9e1fbbe57806309d7f6`;

export const url = client.getAuthorizationUrl(state, redirect_uri, [
  medium.Scope.BASIC_PROFILE,
  medium.Scope.LIST_PUBLICATIONS,
]);

export const authUrl = url;
console.log('authUrl', authUrl);
export const pubURL = `https://api.medium.com/v1/users/${userId}/publications`;

export const tokenURL = `https://api.medium.com/v1/tokens?`;
export const meURL = `https://api.medium.com/v1/me`;

export const grant_type = 'authorization_code';

export const code = 'c4231a31ee41';

export const tokenURL2 = (c = code) =>
  `https://api.medium.com/v1/tokens?code=${c}
  &client_id=${CLIENT_ID}&client_secret=${SECRET}&grant_type=authorization_code
  &redirect_uri=${redirect_uri}`;

export const params = {
  CLIENT_ID,
  SECRET,
  scope,
  state,
  response_type,
  redirect_uri,
};

export const response = {
  token_type: 'Bearer',
  access_token,
  refresh_token,
  scope: [ 'basicProfile', 'listPublications', 'publishPost' ],
  expires_at: 1526579883453,
};

export const userRes = {
  data: {
    id: '17f7ad58bf1b6acf1c52b568ba61f945d320b353308429aec40de1f8abb78a728',
    username: 'tfpractice',
    name: 'theory practice',
    url: 'https://medium.com/@tfpractice',
    imageUrl: '',
  },
};

const chromescriitps = `
  open -na Google\ Chrome --args --allow-file-access-from-files --allow-file-access --allow-cross-origin-auth-prompt--disable-web-security --user-data-dir=/Users/jacksonbrebnor/data-dir`;
