import { Link } from "react-router-dom";
import "./Navbar.css";
import ConnectionButton from "./connectionButton/ConnectionButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>logo?</span>
      <div>
        <ul>
          <Link to="/home">
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
          <ConnectionButton />
        </ul>
      </div>
    </nav>
  );
}
