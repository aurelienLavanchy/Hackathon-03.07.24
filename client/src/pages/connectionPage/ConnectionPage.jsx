import "./ConnectionPage.css";
import Connection from "../../components/connection/Connection";
import SignUp from "../../components/signup/Signup";
import NavBar from "../../components/Navbar";

export default function ConnectionPage() {
  return (
    <>
      <NavBar />
      <div className="form-auth">
        <section className="container-signup">
          <SignUp />
        </section>

        <section className="container-connection">
          <Connection />
        </section>
      </div>
    </>
  );
}
