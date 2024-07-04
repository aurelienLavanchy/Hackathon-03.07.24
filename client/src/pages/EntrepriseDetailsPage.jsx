import { useLoaderData } from "react-router-dom";
import "./EntrepriseDetailsPage.css";

export default function EntrepriseDetailsPage() {
  const companyDetails = useLoaderData();
  console.info(companyDetails);
  // description, detail, id, location, name, sector
  const { detail, location, name, sector } = companyDetails;

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
    </div>
  );
}
