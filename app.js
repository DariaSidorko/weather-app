
const request = require('postman-request');
const geocode = require('./utils/geocode');

/*
const url = 'http://api.weatherstack.com/current?access_key=5dd219bcd6abc330f37a076117e66b3c&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  //console.log(error)
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log("Unable to find location.")
  } else {
    console.log(response.body.current.weather_descriptions[0] + '. Its currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
  }
})



//Geocoding

const urlAddress = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFuZWNoa2EiLCJhIjoiY2tjZ3lyeTJ0MHRzejJwbWd0a2RscGozMCJ9.bURkox-3YNq1fR950UVNww&limit=1';

request({ url: urlAddress, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search")
  } else {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0]
  console.log('LAT: ' + latitude + ' LONG: ' + longitude);
  }
})
*/


geocode ('Boston', (error, data) => {
  console.log('Error ', error);
  console.log('Data: ', data) 
})
