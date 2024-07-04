import { NavLink, useLoaderData } from "react-router-dom";
import "./DashboardEntreprise.css";

export default function DashboardEntreprise() {
  const companyDetails = useLoaderData();

  const { detail, description, location, name, sector } = companyDetails;

  const offerDetails = useLoaderData();
  const { title, date, status } = offerDetails;
  return (
    <div className="board-container">
      <div className="infos-container">
        <div className="infos">
          <h1>Mes informations</h1>
          <h2 className="cle">Nom: </h2>
          {name}

          <h2 className="cle">Description : </h2>
          {description}
          <h2 className="cle">Détail: </h2>
          {detail}
          <h2 className="cle">Localisation</h2>
          {location}
          <h2 className="cle">Sector</h2>
          {sector}
        </div>
        <NavLink to="/" className="button-modify">
          Modifier
        </NavLink>
      </div>
      <div className="offers-container">
        <h1>Mes offres</h1>
        <p className="cle">{title}</p>
        <p className="cle">{date}</p>
        <p className="cle">{status}</p>
        <NavLink to="/" className="button-modify">
          Modifier
        </NavLink>
      </div>
    </div>
  );
}
