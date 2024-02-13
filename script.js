mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZGVzczAwNCIsImEiOiJjbHNjN2hqdTQwbmYzMmxuc3ZnZXVrcnF3In0.aehvUxKNl2NfOpuQ3jNgMA'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
container: 'my-map', // map container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [ -79.38667, 43.67028], // starting position [lng, lat]
zoom: 10, // starting my-maps
});


map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('bike-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/SVG3141/lab2/main/cycling-network.geojson' // Your URL to your buildings.geojson file
    });

    map.addLayer({
        'id': 'bike-routes',
        'type': 'line',
        'source': 'bike-data',
        'paint': {
            'line-color': 'black'
        }
    });

    map.addSource('ac-areas', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/SVG3141/lab2/main/ac_areas.geojson' // Your URL to your buildings.geojson file
    });

    map.addLayer({
        'id': 'ac-buildings',
        'type': 'circle',
        'source': 'ac-areas',
        'paint': {
            'circle-radius': 3,
            'circle-color': '#CC3333'
        }
    });

    // Add a data source from a Mapbox tileset
    map.addSource('green-tiles', { // Create your own source ID
        'type': 'vector',
        'url': 'mapbox://valdess004.8wwj4ysf', // Update to your mapbox tileset ID
    });

    map.addLayer({
        'id': 'green-parks', // Create your own layer ID
        'type': 'fill', // Note this is different to point data
        'source': 'green-tiles', // Must match source ID from addSource Method
        'paint': {
            'fill-color': '#69B00B', // Test alternative colours and style properties
            'fill-opacity': 0.6,
            'fill-outline-color': 'grey'
        },  
        'source-layer': 'gspace-195a56' // Tileset NAME (diff to ID), get this from mapbox tileset page
     }, 'bike-routes'
   
    );
    
});
