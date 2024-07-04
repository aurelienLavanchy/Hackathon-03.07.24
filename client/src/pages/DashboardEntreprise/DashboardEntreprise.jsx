import "./DashboardEntreprise.css";

export default function DashboardEntreprise() {
  return (
    <div className="board-container">
      <div className="infos-container">
        <h1>Mes informations</h1>
        <p>Name</p>
        <p>Description</p>
        <p>Localisation</p>
        <p>Secteur</p>
      </div>
      <div className="offers-container">
        <h1>Mes offres</h1>
        <p>contenu</p>
      </div>
    </div>
  );
}
