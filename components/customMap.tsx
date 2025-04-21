'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

// Fix Leaflet icon paths for Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

type Location = {
  lat: number;
  lng: number;
  label: string;
};

const locations: Location[] = [
  { lat:  9.015067503862758, lng: 38.76863213129613, label: 'kazanchis branch' },
  { lat: 9.01, lng: 38.76, label: 'Bole' },
  { lat: 9.05, lng: 38.72, label: 'Kazanchis' },
  { lat: 9.02, lng: 38.75, label: 'Semit' },
];

const center: LatLngExpression = [9.03, 38.74];

const CustomMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng] as LatLngExpression}>
          <Popup>{loc.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CustomMap;
