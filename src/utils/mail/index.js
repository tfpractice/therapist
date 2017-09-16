// const sgMail = require('@sendgrid/mail');
import sgMail from '@sendgrid/mail';

// import sgClient from '@sendgrid/client';
import axios from 'axios';

const url = `https://api.sendgrid.com/v3/mail/send`;
const key = process.env.REACT_APP_NATASHA_EDWARDS_MAIL_KEY;
const headers = {
  Authorization: `Bearer ${key}`,
  'Access-Control-Allow-Origin': 'localhost:3000',
};
const proxy = {
  host: '127.0.0.1',
  port: 3000,
};
const request = {
  method: 'POST',
  url,
};

// sgClient.setDefaultHeader('User-Agent', 'Some user agent string');
// }

// sgClient.setDefaultHeader('Access-Control-Allow-Origin', '*');
sgMail.setApiKey(process.env.REACT_APP_NATASHA_EDWARDS_MAIL_KEY);
export const testMsg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

//
// console.log('sgMail', sgMail);

export const send = msg => sgMail.send(msg);

// axios.post(url, { data: dMail, headers }).then(console.log);

// sgMail.send(msg);
