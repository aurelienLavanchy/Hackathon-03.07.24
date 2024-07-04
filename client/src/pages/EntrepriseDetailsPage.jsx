import { useLoaderData, Link } from "react-router-dom";
import "./EntrepriseDetailsPage.css";

export default function EntrepriseDetailsPage() {
  const companyDetails = useLoaderData();
  const { detail, location, name, sector } = companyDetails;

  return (
    <div className="company-container">
      <div>
        <Link className="button-back-entreprise" to="/">
          Retour
        </Link>
      </div>
      <div className="company-content">
        <header>
          <h1 className="title-entreprise">{name}</h1>
        </header>
        <span>logo?</span>

        <p className="company-details">{`Nous sommes installé à ${location}`}</p>
        <p className="company-details">{`Notre secteur d'activité est ${sector}`}</p>

        <p className="company-details">{`Qui somme nous ? \n\n${detail}`}</p>
      </div>
    </div>
  );
}
