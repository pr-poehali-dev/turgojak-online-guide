import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const startIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiMxMGI5ODEiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

interface MapProps {
  destination: {
    name: string;
    coordinates: [number, number];
  };
}

const zlatoustCoordinates: [number, number] = [55.1715, 59.6508];

function MapUpdater({ destination }: MapProps) {
  const map = useMap();
  
  useEffect(() => {
    const bounds = L.latLngBounds([zlatoustCoordinates, destination.coordinates]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [destination, map]);
  
  return null;
}

const Map = ({ destination }: MapProps) => {
  const routePath: [number, number][] = [
    zlatoustCoordinates,
    [55.1800, 59.6700],
    [55.1900, 59.6900],
    destination.coordinates
  ];

  return (
    <MapContainer
      center={zlatoustCoordinates}
      zoom={11}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={zlatoustCoordinates} icon={startIcon}>
        <Popup>
          <strong>Златоуст</strong><br />
          Точка отправления
        </Popup>
      </Marker>
      
      <Marker position={destination.coordinates} icon={icon}>
        <Popup>
          <strong>{destination.name}</strong><br />
          Точка назначения
        </Popup>
      </Marker>
      
      <Polyline
        positions={routePath}
        color="#0ea5e9"
        weight={4}
        opacity={0.8}
      />
      
      <MapUpdater destination={destination} />
    </MapContainer>
  );
};

export default Map;
