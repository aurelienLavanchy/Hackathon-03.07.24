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

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <h1 className="text-offers">
        Decouvrez les offres qui vous correspondent{" "}
      </h1>
      <div className="offers-container">
        <button
          type="button"
          onClick={handleBack}
          className="button-back-offers"
        >
          Retour
        </button>
        <div className="filters">
          <div className="filter">
            <label htmlFor="location">Localisation:</label>
            <select
              id="location"
              value={locationFilter}
              onChange={handleLocationChange}
              className="list-filter"
            >
              <option value="">Toutes</option>
              {locationOptions.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="contract">Type de Contrat:</label>
            <select
              id="contract"
              value={contractFilter}
              onChange={handleContractChange}
              className="list-filter"
            >
              <option value="">Tous</option>
              {contractualOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="all-card">
          {filteredJobs.map((offer) => (
            <div key={offer.id} className="offer-card">
              <p className="title-offer">{offer.title} </p>
              <p>
                {" "}
                {offer.location} - {offer.contract}
              </p>

              {offer.description}

              <div className="button-card-offer">
                <Link to={`/offer/${offer.id}`}> En savoir plus</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OffersPage;
