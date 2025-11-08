  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvbmRyYS1ncyIsImEiOiJjbWg5Y3BwYTMwNTczMnJwb2ZvcXRvZnppIn0.kpC54UdVbonYX2QJmIv3Fw';
const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/alondra-gs/cmh9d50gw00q001smgprd25qj', //Your Style URL goes here
        center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

  map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/alondra-gs/BAHA-Map/refs/heads/main/data/183data.geojson'
    });  

     map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
              'circle-color': '#FF69B4',
              'circle-radius': 6,
              'circle-stroke-width': 3,
              'circle-stroke-color': '#FFFFFF'
          }
      });

      // This is the click event for popUps
      map.on('click', 'points-layer', (e) => {
          // Get coordinates/geometry
          const coordinates = e.features[0].geometry.coordinates.slice();
          const properties = e.features[0].properties;

          // Create popup content using the properties from the data
           const popupContent = `
              <div>
                  <h3>${properties.Landmark}</h3>
                  <p><strong>Address:</strong> ${properties.Address}</p>
                  <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                  <p><strong>Designated:</strong> ${properties.Designated}</p>
                  ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                  ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
              </div>
    `      ;
        // Build and attach popup to coordinates
          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(popupContent)
              .addTo(map);
      });

      // Change cursor to pointer when hovering over points
      map.on('mouseenter', 'points-layer', () => {
              map.getCanvas().style.cursor = 'pointer';
      });

      // Change cursor back when leaving points
      map.on('mouseleave', 'points-layer', () => {
            map.getCanvas().style.cursor = '';
      });       
  });
