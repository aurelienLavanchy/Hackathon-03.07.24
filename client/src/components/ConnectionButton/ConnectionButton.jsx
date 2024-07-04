import "./ConnectionButton.css";
import { NavLink } from "react-router-dom";
import avatarHomme from "../../assets/images/avatarHomme.png";

export default function ConnectionButton() {
  return (
    <div className="btn">
      <NavLink to="/connection" className="button-connexion">
        <img src={avatarHomme} alt="Avatar Homme" className="avatar-icon" />
      </NavLink>
    </div>
  );
}
