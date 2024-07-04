import { Link } from "react-router-dom";
import ConnectionButton from "./ConnectionButton/ConnectionButton";

export default function Navbar() {
  return (
    <nav>
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
      <div>
        <ConnectionButton />
      </div>
    </nav>
  );
}
