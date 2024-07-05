import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import fleche from "../../assets/images/fleche.png";

import "./Intro.css";

export default function IntroPage() {
  return (
    <div className="container-intro">
      <style>{`nav {display: none!important}`}</style>
      <img className="logo-intro" src={logo} alt="logo" />
      <h1 className="text-intro">
        Le site d'offres d'emploi qui rend la tech + inclusive
      </h1>
      <Link to="/home">
        <img className="fleche-intro" src={fleche} alt="suivant" />
      </Link>
    </div>
  );
}
