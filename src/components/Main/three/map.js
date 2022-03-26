import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import state from './parks';

import 'mapbox-gl/dist/mapbox-gl.css';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbmNvdHRlcjQ1IiwiYSI6ImNrejR4a2E0dzBnOXUyd28wbmtid2cyNTUifQ.ZzDQmLT_ZgSveVBx_a_3DQ';


function Map({ current, scrollHeight }) {
  const parks = state.paragraphs;
  const initialLat = Number(parks[0].location.split(',')[0]);
  const initialLng = Number(parks[0].location.split(',')[1]);


  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(initialLng);
  const [lat] = useState(initialLat);
  const [zoom] = useState(8);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      transition: 300
    });
  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!current) return; 
    if (current < 100) return;

    const index = Math.floor((current / scrollHeight) * 60 - .5);
    index >= 0 && console.log(index)

    if (index >= 0) {
      map.current.setCenter([ 
        Number(parks[index].location.split(',')[1]),
        Number(parks[index].location.split(',')[0]), 
      ])
    }
  }, [current, parks, scrollHeight]);


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default Map;

