import React from 'react';

const query = `q=place_id:ChIJQ9hZ_Rb2wokRNzko5jkSWW4`;

// const key = process.env.REACT_APP_THERAPIST_GKEY;
const key = process.env.REACT_APP_NATASHA_EDWARDS_GCLOUD_KEY;

const src = `https://www.google.com/maps/embed/v1/place?${query}&key=${key}`;

const Map = () => (
  <iframe width="100%" height="450" src={src} allowFullScreen />
);

export default Map;
