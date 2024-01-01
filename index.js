let myMap = L.map("map").setView([18.5204, 73.8567], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

let agakhan_marker = L.marker([18.5525, 73.9015],{color:"green"}).addTo(myMap);
let SW_marker = L.marker([18.5195, 73.8553]).addTo(myMap);
let zoo_marker = L.marker([18.4525, 73.8608]).addTo(myMap);
let dagdu_marker = L.marker([18.51639, 73.8561]).addTo(myMap);
let saras_marker = L.marker([18.5014, 73.8529]).addTo(myMap);





agakhan_marker.bindPopup("<b>Aghakan Palace it served as a prison for Mahatma Gandhi, his wife Kasturba Gandhi</b>");
SW_marker.bindPopup("<b>Shaniwar Wada is a historical fortification in the city of Pune</b>");
zoo_marker.bindPopup("<b>Katraj Zoo the one and only zoo in Pune</b>");
dagdu_marker.bindPopup("<b>The Dagadusheth Halwai Ganapati temple is a Hindu Temple located in Pune and is dedicated to the Hindu god Ganesh.</b>");
saras_marker.bindPopup("<b> Sarasbaug is a popular garden in Pune</b>");




