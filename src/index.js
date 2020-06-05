import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

  /*globals mapboxgl */
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3VsaGFuIiwiYSI6ImNrYjFtOTBzYjAxYzgyb255YWpuZGo4NmcifQ.DPM8bM2kKpCu-C0R-9HCsg";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [174.764984, -36.853611], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
  // Make markers on map
  var auckland = new mapboxgl.Marker()
    .setLngLat([174.764984, -36.853611])
    .addTo(map);
  var hamilton = new mapboxgl.Marker()
    .setLngLat([175.287628, -37.780079])
    .addTo(map);
  var wellington = new mapboxgl.Marker()
    .setLngLat([174.789978, -41.312351])
    .addTo(map);
  // Add listeners to all markers
  var input = document.getElementById("usr")
  auckland.getElement().addEventListener("click", function (e) {
    input.setAttribute("value", "1010");
  });
  hamilton.getElement().addEventListener("click", function (e) {
    input.setAttribute("value", "3214");
  });
  wellington.getElement().addEventListener("click", function (e) {
    input.setAttribute("value", "6021");
  });