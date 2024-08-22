
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import './custom-leaflet.css'

// Replace with your actual location coordinates
const myLocation = [23.8103, 90.4125]; // Example coordinates for Dhaka, Bangladesh

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer center={myLocation} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={myLocation}>
          <Popup>
            Your Location: Dhaka, Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
