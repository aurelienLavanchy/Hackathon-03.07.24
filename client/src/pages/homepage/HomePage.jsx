import "./HomePage.css";
import img1 from "../../assets/images/9.png";
import img2 from "../../assets/images/11.png";
import img3 from "../../assets/images/10.png";
import img4 from "../../assets/images/12.png";

export default function HomePage() {
  return (
    <div className="container-homepage">
      <p className="text-homepage">
        Olintech - All in Tech, Toustes dans la Tech, est une plateforme
        d’emploi regroupant des entreprises engagées contre les discriminations,
        et qui cherchent à recruter des profils sous-représentés dans la tech:
        femmes, personnes lgbtqia+, personnes handicapées. Crééons la tech dont
        nous rêvons!
      </p>
      <section className="image-homepage">
        <img className="image-size" src={img1} alt="" />
        <img className="image-size" src={img2} alt="" />
        <img className="image-size" src={img3} alt="" />
        <img className="image-size" src={img4} alt="" />
      </section>
    </div>
  );
}
