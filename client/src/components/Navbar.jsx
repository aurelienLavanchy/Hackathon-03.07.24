import { Link } from "react-router-dom";
import "./Navbar.css";
import avatarHome from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">
        <img src={logo} alt="logo" className="logo-homepage" />
      </Link>
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
          <Link to="/connection" className="button-connexion">
            <img src={avatarHome} alt="Avatar Homme" className="avatar-icon" />
          </Link>
        </ul>
      </div>
    </nav>
  );
}
