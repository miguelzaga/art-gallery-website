window.onload = function () {
  initializeMap();
};

function initializeMap() {
    var map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 13,
    });
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  }
