mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvbmRyYS1ncyIsImEiOiJjbWg5Y3BwYTMwNTczMnJwb2ZvcXRvZnppIn0.kpC54UdVbonYX2QJmIv3Fw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/alondra-gs/cmh9d50gw00q001smgprd25qj', //Your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });