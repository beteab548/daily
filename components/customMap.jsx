"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const locations = [
  { lat: 9.015067503862758, lng: 38.76863213129613, label: "kazanchis branch" },
  { lat: 8.992553045527153, lng: 38.783058282432684, label: "Bole branch" },
  { lat: 9.012437743996665, lng: 38.82216261126925, label: "Gurdshola " },
  { lat: 8.9899133939914, lng: 38.727030638250376, label: "Bisrate Gabriel" },
  { lat: 8.961728680795646, lng: 38.78633737486126, label: "Bulbula" },
];

const center = [8.993067503862758, 38.76863213129613];

const CustomMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          <Popup>{loc.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CustomMap;
