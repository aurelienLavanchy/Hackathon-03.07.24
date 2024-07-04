import { NavLink, useLoaderData } from "react-router-dom";
import "./DashboardEntreprise.css";
import offerImage from "../../assets/images/hand-3044387_640.jpg";
import companyImage from "../../assets/images/london-3529954_640 (1).jpg";

export default function DashboardEntreprise() {
  const companyDetails = useLoaderData();

  const { detail, description, location, name, sector } = companyDetails;

  const offerDetails = useLoaderData();
  const { title, status } = offerDetails;
  const postDate = new Date(offerDetails.date);
  const formatedDate = postDate.toISOString().substring(0, 10);
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <button type="button" onClick={handleBack} className="backButton">
        Retour
      </button>
      <div className="board-container">
        <h1 className="titre-board">MON TABLEAU DE BORD</h1>
        <div className="infos-container">
          <div className="infos">
            <h1 className="titre-infos">Mes informations</h1>
            <div className="offer-body">
              <img
                className="offer-img"
                src={companyImage}
                alt="hand mobile net"
              />
              <div>
                <div className="cle">
                  <h2>Nom: </h2>
                  {name}
                </div>
                <div className="cle">
                  <h2>Description : </h2>
                  {description}
                </div>
                <div className="cle">
                  <h2>Détail: </h2>
                  {detail}
                </div>
                <div className="cle">
                  <h2>Localisation</h2>
                  {location}
                </div>
                <div className="cle">
                  <h2>Sector</h2>
                  {sector}
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/dashboard/5" className="button-modify">
            Modifier
          </NavLink>
        </div>
        <div className="offers-container">
          <h1 className="titre-infos">Mes offres</h1>
          <div className="offer-body">
            <img className="offer-img" src={offerImage} alt="hand mobile net" />
            <div>
              <p className="cle">{title}</p>
              <p className="cle">{formatedDate}</p>
              <p className="cle">{status}</p>
            </div>
          </div>
          <NavLink to="/addOffer" className="button-ajouter">
            Ajouter une offre
          </NavLink>
        </div>
      </div>
    </>
  );
}
