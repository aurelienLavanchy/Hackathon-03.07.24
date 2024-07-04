import { useLoaderData } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "./EntrepriseDetailsPage.css";

export default function EntrepriseDetailsPage() {
  const companyDetails = useLoaderData();
  const { detail, location, name, sector } = companyDetails;
  const coordinates = [];
  console.info(coordinates);

  return (
    <div className="company-container">
      <div className="company-content">
        <header>
          <h1>{name}</h1>
        </header>
        <span>logo?</span>
        <div className="company-details">
          <p>{`Nous sommes installé à ${location}`}</p>
          <p>{`Notre secteur d'activité est ${sector}`}</p>
        </div>
        <p className="company-description">{`Qui somme nous ? \n\n${detail}`}</p>
      </div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
