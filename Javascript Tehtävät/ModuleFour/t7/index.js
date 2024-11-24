"use strict";

const map = L.map('map').setView([51.505, -0.09], 13); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const query = {
  fromPlace: "Kamppi, Helsinki::60.168992,24.932366",
  toPlace: "Pisa, Espoo::60.175294,24.684855",
}
