var markers =[{"name": "Madrid","lat":40.4893538,"long": -3.6827461},
    {"name": "Málaga","lat":36.7585406,"long": -4.3971722},
    {"name": "Roquetas de Mar","lat":36.8028573,"long":-2.5998021},
    {"name": "Almería","lat":36.7725091,"long":-2.4277821},
    {"name": "Antequera","lat":37.0548852,"long":-4.5928281},
    {"name": "Cazorla","lat":37.9214195,"long":-2.9787961},
    {"name": "Tarifa","lat":36.0818649,"long":-5.6662108},
    {"name": "Sevilla","lat":37.3914105,"long":-5.9591776},
    {"name": "Jaén","lat":37.8258451,"long":-3.7331593},
    {"name": "Córdoba","lat":37.8550964,"long":-4.7086738},
    {"name": "Algeciras","lat":36.1054880,"long":-5.4528434},
    {"name": "Toledo","lat":39.8676536,"long":-4.0098788},
    {"name": "Barcelona","lat":41.3818,"long":2.1685},
    {"name": "Salamanca","lat":40.9559681,"long":-5.6802244},
    {"name": "Valencia","lat":39.4561165,"long":-0.3545661},
    {"name": "Zaragoza","lat":41.6563497,"long":-0.876566},
    {"name": "Logroño","lat":42.4671213,"long":-2.4454133},
    {"name": "Tolouse","lat":43.6042600,"long":1.4436700},
    {"name": "Tetouan","lat":35.57845,"long":-5.36837},
    {"name": "Chaouen","lat":35.1714,"long":-5.2697},
    {"name": "Tanger","lat":35.7672691,"long":-5.7997499},
    {"name": "Asilah","lat":35.4646127,"long":-6.030865400000039},
    {"name": "Milano","lat":45.4642715,"long":9.1895103},
    {"name": "Bergamo","lat":45.6960106,"long":9.6672096},
    {"name": "Turin","lat":45.0704918,"long":7.68682},
    {"name": "Genova","lat":44.4047813,"long":8.9443903},
    {"name": "Verona","lat":45.4299011,"long":10.9844398},
    {"name": "Venezia","lat":43.9668400,"long":12.7319700},
    {"name": "Roma","lat":41.890251,"long":12.492373},
    {"name": "Bucarest","lat":44.432251,"long":26.1062603},
    {"name": "Craiova","lat":44.3166695,"long":23.7999992},
    {"name": "Como","lat":45.8081894,"long":9.0832005},
    {"name": "Desenzano di Garda","lat":45.4689,"long":10.535},
    {"name": "Sirmione","lat":45.4925,"long":10.6081},
    {"name": "Dublin","lat":53.3330612,"long":-6.2488899},
    {"name": "London","lat":51.5085297,"long":-0.12574},
    {"name": "Frankfurt","lat":50.110924,"long":8.682127},
    {"name": "Heidelberg","lat":49.40768,"long":8.69079},
    {"name": "Mainz","lat":49.98419,"long":8.2791},
    {"name": "New York","lat":40.730610,"long":-73.935242},
    {"name": "Washington DC","lat":38.89511,"long":-77.03637},
    {"name": "Amsterdam","lat":52.379189,"long":4.899431},
    {"name": "Philadelphia","lat":39.952583,"long":-75.165222},
    {"name": "Cambridge","lat":52.205067,"long":0.107760},
    {"name": "Bilbo","lat":43.262985,"long":-2.935013},
    {"name": "Donosti","lat":43.312691,"long":-1.993332},
    {"name": "Gran Canaria","lat":28.123618,"long":-15.432873 },
    {"name": "Cáceres", "lat":39.48,"long":-6.37 },
    {"name": "Trujillo", "lat":39.46,"long":-5.88},
    {"name": "Mérida", "lat":38.92,"long":-6.34},
    {"name": "Lisbon", "lat":38.736946,"long":-9.142685},
    {"name": "Iruela", "lat":37.9203757, "long":-2.9916199},
    {"name": "Santander", "lat": 43.46472, "long": -3.80444},
    {"name": "Somo", "lat": 43.4506, "long": -3.7358},
    {"name": "Santoña", "lat": 43.4414, "long": -3.4575},
    {"name": "Santillana Del Mar", "lat": 43.3891, "long": -4.1088},
    {"name": "Comillas", "lat": 43.3833, "long": -4.3},
    {"name": "San Vicente de la Barquera", "lat": 43.38509, "long": -4.39934},
    {"name": "Oriñon", "lat": 43.4, "long": -3.3167},
    {"name": "Valladolid", "lat": 41.65518, "long": -4.72372},
    {"name": "Torredonjimeno", "lat": 37.77, "long": -3.96},
    {"name": "Brussels", "lat": 50.85045, "long": 4.34878},
    {"name": "Antwerp", "lat": 51.260197, "long": 4.402771}]

var map = L.map( 'map', {
  center: [51.505, -0.09],
  minZoom: 2,
  zoom: 1
});
 
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );
 
var myURL = jQuery( 'script[src$="index.js"]' ).attr( 'src' ).replace( 'index.js', '' );
var myIcon = L.icon({
  iconUrl: myURL + '../img/pin24.png',
  iconRetinaUrl: myURL + '../img/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});


for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<a>' +  markers[i].name + '</a>';

  L.marker( [markers[i].lat, markers[i].long], {icon: myIcon} )
                  .bindPopup( popup ).addTo(map);
  
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
