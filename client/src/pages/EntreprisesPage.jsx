import { Link, useLoaderData } from "react-router-dom";
import "./EntreprisesPage.css";

export default function EntreprisesPage() {
  const companies = useLoaderData();

  return (
    <div className="companies-container">
      <div>
        <Link className="button-back-entreprises" to="/">
          Retour
        </Link>
      </div>
      <h1 className="entreprises-title"> Les entreprises </h1>
      <div className="companies-list">
        {companies &&
          companies.map((c) => (
            <div key={c.id} className="company-card">
              <p className="company-name">{c.name}</p>
              <div className="company-details">
                <p>
                  {"Secteur: "}
                  <span className="company-sector">{c.sector}</span>
                </p>
                <p>{`Basé.e à ${c.location}`}</p>
              </div>
              <div className="company-footer">
                <p className="company-short-description">{`À propos: ${c.detail}`}</p>
                <Link to={`/entreprise/${c.id}`} className="company-link">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
