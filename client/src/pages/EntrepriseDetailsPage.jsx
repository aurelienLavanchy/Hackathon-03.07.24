import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "./EntrepriseDetailsPage.css";

export default function EntrepriseDetailsPage() {
  const companyDetails = useLoaderData();
  const { detail, location, name, sector } = companyDetails;

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const cityCoordinates = [
      [48.856613, 2.352222],
      [47.068008, 3.01348],
      [45.764042, 4.835659],
      [43.603951, 1.44451],
      [43.710175, 7.261953],
      [47.218262, -1.55718],
      [48.573406, 7.752111],
      [43.608292, 3.8796],
      [44.834999, -0.57549],
      [50.62925, 3.057256],
    ];

    function setLocation(city) {
      switch (city) {
        case "Paris":
          setCoordinates(cityCoordinates[0]);
          break;
        case "Marseille":
          setCoordinates(cityCoordinates[1]);
          break;
        case "Lyon":
          setCoordinates(cityCoordinates[2]);
          break;
        case "Toulouse":
          setCoordinates(cityCoordinates[3]);
          break;
        case "Nice":
          setCoordinates(cityCoordinates[4]);
          break;
        case "Nantes":
          setCoordinates(cityCoordinates[5]);
          break;
        case "Strasbourg":
          setCoordinates(cityCoordinates[6]);
          break;
        case "Montpellier":
          setCoordinates(cityCoordinates[7]);
          break;
        case "Bordeaux":
          setCoordinates(cityCoordinates[8]);
          break;
        case "Lille":
          setCoordinates(cityCoordinates[9]);
          break;
        default:
          setCoordinates([46.227638, 2.213749]);
      }
    }
    setLocation(location);
  }, [location]);

  return (
    <div className="company-container">
      <div>
        <Link to="/">Retour</Link>
      </div>
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
      <MapContainer
        center={coordinates || [46.227638, 2.213749]}
        zoom={13}
        scrollWheelZoom={false}
        id="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates || [46.227638, 2.213749]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
