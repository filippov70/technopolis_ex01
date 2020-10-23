function loadMap() {
  var map = L.map('map').setView([54.94, 83.19], 16); // координаты центра карты и ее масштаб
  // первый слой карты - подложка OSM
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 22,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    // ещё слой
    var marker = L.marker([54.941597, 83.185505]).addTo(map); // координаты можно узнать при помощи QGIS
    marker.bindPopup("<b>Шаверма!</b><br>Брат-джан готовит отличную шавуху!")
}