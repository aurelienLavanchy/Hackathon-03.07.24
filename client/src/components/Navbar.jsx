import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>logo?</span>
      <div>
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
          <Link to="/safezone">
            <li>Safe zone</li>
          </Link>
        </ul>
        <span>avatar?</span>
      </div>
    </nav>
  );
}
