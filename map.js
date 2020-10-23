function loadMap() {
  var map = L.map('map').setView([54.94, 83.19], 16); // координаты центра карты и ее масштаб
  // первый слой карты - подложка OSM
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 26,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    // ещё слой
    var marker = L.marker([54.941597, 83.185505]).addTo(map); // координаты можно узнать при помощи QGIS
    marker.bindPopup("<b>Шаверма the best!</b><br>Брат-джан готовит отличную шавуху!");

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.geojson');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    xhr.onload = function() {
    if (xhr.status !== 200) return
      L.geoJSON(xhr.response).addTo(map);
    };
  xhr.send();
}

function addMarker(feature) {
  // add marker
  var myIcon = L.divIcon({
    className: 'my-div-icon'
  });
  var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]/*, myIcon*/).bindPopup(feature.properties.name);
  markersLayer.addLayer(marker);
  markersLayer.addTo(map);
  map.setView([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 17);
}