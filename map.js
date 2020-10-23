function loadMap() {
  var map = L.map('map').setView([54.94, 83.19], 15); // координаты центра карты и ее масштаь
  // первый слой карты - подложка OSM
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

}