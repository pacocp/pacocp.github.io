var markers = [
  { name: "Madrid", lat: 40.4893538, long: -3.6827461 },
  { name: "Málaga", lat: 36.7585406, long: -4.3971722 },
  { name: "Roquetas de Mar", lat: 36.8028573, long: -2.5998021 },
  { name: "Almería", lat: 36.7725091, long: -2.4277821 },
  { name: "Antequera", lat: 37.0548852, long: -4.5928281 },
  { name: "Cazorla", lat: 37.9214195, long: -2.9787961 },
  { name: "Tarifa", lat: 36.0818649, long: -5.6662108 },
  { name: "Sevilla", lat: 37.3914105, long: -5.9591776 },
  { name: "Jaén", lat: 37.8258451, long: -3.7331593 },
  { name: "Córdoba", lat: 37.8550964, long: -4.7086738 },
  { name: "Algeciras", lat: 36.105488, long: -5.4528434 },
  { name: "Toledo", lat: 39.8676536, long: -4.0098788 },
  { name: "Barcelona", lat: 41.3818, long: 2.1685 },
  { name: "Salamanca", lat: 40.9559681, long: -5.6802244 },
  { name: "Valencia", lat: 39.4561165, long: -0.3545661 },
  { name: "Zaragoza", lat: 41.6563497, long: -0.876566 },
  { name: "Logroño", lat: 42.4671213, long: -2.4454133 },
  { name: "Tolouse", lat: 43.60426, long: 1.44367 },
  { name: "Tetouan", lat: 35.57845, long: -5.36837 },
  { name: "Chaouen", lat: 35.1714, long: -5.2697 },
  { name: "Tanger", lat: 35.7672691, long: -5.7997499 },
  { name: "Asilah", lat: 35.4646127, long: -6.030865400000039 },
  { name: "Milano", lat: 45.4642715, long: 9.1895103 },
  { name: "Bergamo", lat: 45.6960106, long: 9.6672096 },
  { name: "Turin", lat: 45.0704918, long: 7.68682 },
  { name: "Venezia", lat: 45.4408474, long: 12.3155151 },
  { name: "Genova", lat: 44.4047813, long: 8.9443903 },
  { name: "Verona", lat: 45.4299011, long: 10.9844398 },
  { name: "Venezia", lat: 43.96684, long: 12.73197 },
  { name: "Roma", lat: 41.890251, long: 12.492373 },
  { name: "Bucarest", lat: 44.432251, long: 26.1062603 },
  { name: "Craiova", lat: 44.3166695, long: 23.7999992 },
  { name: "Como", lat: 45.8081894, long: 9.0832005 },
  { name: "Desenzano di Garda", lat: 45.4689, long: 10.535 },
  { name: "Sirmione", lat: 45.4925, long: 10.6081 },
  { name: "Dublin", lat: 53.3330612, long: -6.2488899 },
  { name: "London", lat: 51.5085297, long: -0.12574 },
  { name: "Frankfurt", lat: 50.110924, long: 8.682127 },
  { name: "Heidelberg", lat: 49.40768, long: 8.69079 },
  { name: "Mainz", lat: 49.98419, long: 8.2791 },
  { name: "New York", lat: 40.73061, long: -73.935242 },
  { name: "Washington DC", lat: 38.89511, long: -77.03637 },
  { name: "Amsterdam", lat: 52.379189, long: 4.899431 },
  { name: "Philadelphia", lat: 39.952583, long: -75.165222 },
  { name: "Cambridge", lat: 52.205067, long: 0.10776 },
  { name: "Bilbo", lat: 43.262985, long: -2.935013 },
  { name: "Donosti", lat: 43.312691, long: -1.993332 },
  { name: "Gran Canaria", lat: 28.123618, long: -15.432873 },
  { name: "Cáceres", lat: 39.48, long: -6.37 },
  { name: "Trujillo", lat: 39.46, long: -5.88 },
  { name: "Mérida", lat: 38.92, long: -6.34 },
  { name: "Lisbon", lat: 38.736946, long: -9.142685 },
  { name: "Iruela", lat: 37.9203757, long: -2.9916199 },
  { name: "Santander", lat: 43.46472, long: -3.80444 },
  { name: "Somo", lat: 43.4506, long: -3.7358 },
  { name: "Santoña", lat: 43.4414, long: -3.4575 },
  { name: "Santillana Del Mar", lat: 43.3891, long: -4.1088 },
  { name: "Comillas", lat: 43.3833, long: -4.3 },
  { name: "San Vicente de la Barquera", lat: 43.38509, long: -4.39934 },
  { name: "Oriñon", lat: 43.4, long: -3.3167 },
  { name: "Valladolid", lat: 41.65518, long: -4.72372 },
  { name: "Torredonjimeno", lat: 37.77, long: -3.96 },
  { name: "Brussels", lat: 50.85045, long: 4.34878 },
  { name: "Antwerp", lat: 51.260197, long: 4.402771 },
  { name: "Spa", lat: 50.492429, long: 5.864695 },
  { name: "Gent", lat: 51.0543422, long: 3.7174243 },
  { name: "Leuven", lat: 50.87959, long: 4.70093 },
  { name: "Luxembourg", lat: 49.611622, long: 6.131935 },
  { name: "Brugge", lat: 51.20892, long: 3.22424 },
  { name: "Paris", lat: 48.85341, long: 2.3488 },
  { name: "Palo Alto", lat: 37.468319, long: -122.143936 },
  { name: "Menlo Park", lat: 37.452961, long: -122.181725 },
  { name: "Santa Cruz", lat: 36.974117, long: -122.030792 },
  { name: "San Francisco", lat: 37.733795, long: -122.446747 },
  { name: "Santa Monica", lat: 34.024212, long: -118.496475 },
  { name: "Venice Beach", lat: 33.9764002, long: -118.4667452 },
  { name: "Camel by the sea", lat: 36.555241, long: -121.923286 },
  { name: "Williams", lat: 35.251003, long: -112.188614 },
  { name: "Grand Canyon National Park", lat: 36.056595, long: -112.125092 },
  { name: "Las Vegas", lat: 36.114647, long: -115.172813 },
  { name: "Mariposa", lat: 37.487118, long: -119.96769 },
  { name: "Yosemite National Park", lat: 37.865101, long: -119.53833 },
  { name: "Point Reyes", lat: 38.066667, long: -122.883333 },
  { name: "Castle Rock", lat: 37.228555, long: -122.096073 },
  { name: "Sequoia National Park", lat: 36.486366, long: -118.56575 },
  {
    name: "Henry Cowell Redwoods State Park",
    lat: 37.0235602,
    long: -122.0530192,
  },
  { name: "Lake Tahoe", lat: 39.096848, long: -120.032349 },
  { name: "Desolation Wilderness", lat: 38.9209672, long: -120.1722347 },
  { name: "Segovia", lat: 40.942902, long: -4.108807 },
  { name: "Lagos", lat: 37.129665, long: -8.669586 },
  { name: "Alvor", lat: 37.130505, long: -8.593506 },
  { name: "Albufeira", lat: 37.0854, long: 8.25741 },
  { name: "Glasgow", lat: 55.860916, long: -4.251433 },
  { name: "Kyle of Lochalsh", lat: 57.282607, long: -5.714329 },
  { name: "Portree", lat: 57.41247, long: -6.19602 },
  { name: "Inverness", lat: 57.477772, long: -4.224721 },
  { name: "Edinburgh", lat: 55.953251, long: -3.188267 },
  { name: "Santiago de Chile", lat: -33.45694, long: -70.64827 },
  { name: "San José de Maipo", lat: -33.643169, long: -70.345207 },
  { name: "Valparaiso", lat: -33.036, long: -71.62963 },
  { name: "Viña del Mar", lat: -33.02457, long: -71.55183 },
  { name: "Puerto Varas", lat: -41.31946, long: -72.98538 },
  { name: "Punta Arenas", lat: -53.15483, long: -70.91129 },
  { name: "Puerto Natales", lat: -51.72363, long: -72.48745 },
  {
    name: "Parque Nacional Torres del Paine",
    lat: -50.98305556,
    long: -72.96638889,
  },
  { name: "Almadén de la plata", lat: 37.87221, long: -6.08085 },
  { name: "Combarro", lat: 42.43188, long: -8.70649 },
  { name: "Isla de Arosa", lat: 42.567, long: -8.883 },
  { name: "Pontevedra", lat: 42.431, long: -8.64435 },
  { name: "Vigo", lat: 42.231358, long: -8.712447 },
  { name: "Puebla de Sanabria", lat: 42.0546898, long: -6.6339736 },
  { name: "Islas Cíes", lat: 37.8857504, long: -4.8001831 },
  { name: "Chamonix", lat: 45.92375, long: 6.869333 },
];

var map = L.map("map", {
  center: [51.505, -0.09],
  minZoom: 2,
  zoom: 1,
});

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ["a", "b", "c"],
}).addTo(map);

var myURL = jQuery('script[src$="index.js"]')
  .attr("src")
  .replace("index.js", "");
var myIcon = L.icon({
  iconUrl: myURL + "../img/pin24.png",
  iconRetinaUrl: myURL + "../img/pin48.png",
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

for (var i = 0; i < markers.length; ++i) {
  var popup = "<a>" + markers[i].name + "</a>";

  L.marker([markers[i].lat, markers[i].long], { icon: myIcon })
    .bindPopup(popup)
    .addTo(map);

  /*markerClusters.addLayer(m).addTo(map);*/
}

/*
for ( var i=0; i < markers.length; ++i )
{
   L.marker( [markers[i].lat, markers[i].long], {icon: myIcon} )
      .bindPopup( '<a href="' + markers[i].name + '" target="_blank">' + markers[i].address + '</a>' )
      .addTo( map );
}
*/
