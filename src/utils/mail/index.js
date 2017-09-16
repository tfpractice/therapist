import apostle from 'apostle.io';

const key = process.env.REACT_APP_NEDWARDS_APOSTLE_KEY;

apostle.domainKey = key;

// // const sgMail = require('@sendgrid/mail');
// import sgMail from '@sendgrid/mail';
//
// // import sgClient from '@sendgrid/client';
// import axios from 'axios';
//
// const url = `https://api.sendgrid.com/v3/mail/send`;
// const key = process.env.REACT_APP_NATASHA_EDWARDS_MAIL_KEY;
// const headers = {
//   Authorization: `Bearer ${key}`,
//   'Access-Control-Allow-Origin': 'localhost:3000',
// };
// const proxy = {
//   host: '127.0.0.1',
//   port: 3000,
// };
// const request = {
//   method: 'POST',
//   url,
// };
//
// // sgClient.setDefaultHeader('User-Agent', 'Some user agent string');
// // }
//
// // sgClient.setDefaultHeader('Access-Control-Allow-Origin', '*');
// sgMail.setApiKey(process.env.REACT_APP_NATASHA_EDWARDS_MAIL_KEY);
// export const testMsg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
//
// //
// // console.log('sgMail', sgMail);

const testMessage = `Hey Natasha,
It's theory, I've hacked together a quick email solution that doesnt require
 the wild amount of server set-up that most services Require. This comes with 
 some default branding, but has been sent from your website successfully. I've
semt this email to send to your email address so you can see it working, but I'm gonna test/update it with 
my aemail address.

You can test it out on your site at natasha-edwards.surge.sh if you go to the 
contact page and click send. Dont do it too much, tho, becuase it'll just send
 this template to me over and over again and gmail might block it for spam or something.
 
 Im glad you like the site so far and I hope this solution can last as it might
 shave a good week of our timeline.
 
 TTYL <3,
 tfpractice
`;

export const send = msg =>
  apostle.deliver('welcome', { email: 'jackson.brebnor@gmail.com' });

// sgMail.send(msg);
//
// // axios.post(url, { data: dMail, headers }).then(console.log);
//
// // sgMail.send(msg);
