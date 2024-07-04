import "./ConnectionButton.css";
import { NavLink } from "react-router-dom";
import avatarHome from "../../assets/images/avatar.png";

export default function ConnectionButton() {
  return (
    <div className="btn">
      <NavLink to="/connection" className="button-connexion">
        <img src={avatarHome} alt="Avatar Homme" className="avatar-icon" />
      </NavLink>
    </div>
  );
}
