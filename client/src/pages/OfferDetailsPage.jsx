import { useLoaderData, Link } from "react-router-dom";

export default function OfferDetailsPage() {
  const [jobOffer] = useLoaderData();
  console.info(jobOffer);
  // title, description, skill, contract, date, rqth, location, salary, status
  return (
    <>
      <h1>L'offre que vous avez sélectionnée</h1>
      <div>
        <header>
          <h2>{jobOffer.title}</h2>
        </header>
        <div>
          <p>{`Lieu: ${jobOffer.location}`}</p>
          <p>{`Type de contrat: ${jobOffer.contract}`}</p>
          <p>{`Salaire: ${jobOffer.salary}`}</p>
        </div>
        <p>{`Les missions pour ce poste: ${jobOffer.description}`}</p>
        <footer>
          <p>{`Posté le ${jobOffer.date}`}</p>
          {jobOffer.status === "active" ? (
            <>
              <p>{`Status: ${jobOffer.status}`}</p>
              <Link to={`/entreprise/${jobOffer.entreprise_id}`}>
                En savoir plus sur l'entreprise
              </Link>
            </>
          ) : (
            <>
              <p>Cette offre n'est plus valable</p>
              <Link to={`/entreprise/${jobOffer.entreprise_id}`}>
                Voir les autres offres de cette entreprise
              </Link>
            </>
          )}
        </footer>
      </div>
    </>
  );
}
