import { useLoaderData, Link } from "react-router-dom";
import "./OfferDetailsPage.css";

export default function OfferDetailsPage() {
  const [jobOffer] = useLoaderData();
  const postDate = new Date(jobOffer.date);
  const formattedDate = postDate.toISOString().substring(0, 10);

  return (
    <div className="offer-container">
      <div>
        <Link to="/">Retour</Link>
      </div>
      <h1 className="offer-title">L'offre que vous avez sélectionnée</h1>
      <div className="offer-content">
        <header>
          <h2>{jobOffer.title}</h2>
        </header>
        <div className="offer-details">
          <p>{`Lieu: ${jobOffer.location}`}</p>
          <p>{`Type de contrat: ${jobOffer.contract}`}</p>
          <p>{`Salaire: ${jobOffer.salary} €`}</p>
        </div>
        <p className="offer-description">{`Les missions pour ce poste: \n${jobOffer.description}`}</p>
        <footer>
          <div className="date-status">
            <p>{`Posté le ${formattedDate}`}</p>
            <p>{`Status: ${jobOffer.status}`}</p>
          </div>
          <Link to={`/entreprise/${jobOffer.company_id}`}>
            <button type="button" className="offer-button">
              {jobOffer.status === "active"
                ? "En savoir plus sur l'entreprise"
                : "Voir les autres offres de cette entreprise"}
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}
