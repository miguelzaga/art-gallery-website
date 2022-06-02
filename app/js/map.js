window.onload = function () {
  initializeMap();
};

function initializeMap() {
  var map = L.map("map", {
    center: [41.48, -71.3095],
    zoom: 15,
    zoomControl: false,
    scrollWheelZoom: false,
  });

  var myIcon = L.icon({
    iconUrl: "./app/assets/icon-location.svg",
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  L.marker([41.481322, -71.31036], { icon: myIcon }).addTo(map);
}
