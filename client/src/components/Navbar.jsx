import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>logo?</span>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/offers">
          <li>Les offres</li>
        </Link>
        <Link to="/entreprises">
          <li>Les entreprises</li>
        </Link>
        <Link to="/tips">
          <li>Conseils</li>
        </Link>
      </ul>
    </nav>
  );
}
