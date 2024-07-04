import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import "./OffersPage.css";

function OffersPage() {
  const [jobsData] = useLoaderData();
  console.info("Jobs Data:", jobsData);

  const [contractFilter, setContractFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const handleContractChange = (e) => {
    setContractFilter(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const contractualOptions = ["CDI", "CDD", "Alternance", "Stage"];
  const locationOptions = [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
    "Lille",
  ];

  const filteredJobs = jobsData.filter(
    (offer) =>
      (contractFilter === "" ? offer : offer.contract === contractFilter) &&
      (locationFilter === "" ? offer : offer.location === locationFilter)
  );
  console.info("Filtered Jobs:", filteredJobs);

  return (
    <div className="offers-container">
      <div>
        <Link to="/">Retour</Link>
      </div>
      <div className="filters">
        <div className="filter">
          <label htmlFor="contract">Type de Contrat:</label>
          <select
            id="contract"
            value={contractFilter}
            onChange={handleContractChange}
          >
            <option value="">Tous</option>
            {contractualOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label htmlFor="location">Localisation:</label>
          <select
            id="location"
            value={locationFilter}
            onChange={handleLocationChange}
          >
            <option value="">Toutes</option>
            {locationOptions.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {filteredJobs.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div>
              <Link to={`/offer/${offer.id}`}> En savoir plus</Link>
            </div>
            {offer.title} {offer.description} {offer.contract} {offer.location}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersPage;
