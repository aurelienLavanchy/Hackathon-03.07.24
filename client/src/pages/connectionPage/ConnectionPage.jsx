import "./ConnectionPage.css";
import Connection from "../../components/connection/Connection";
import SignUp from "../../components/signup/Signup";

export default function ConnectionPage() {
  return (
    <div className="form-auth">
      <section className="container-signup">
        <SignUp />
      </section>

      <section className="container-connection">
        <Connection />
      </section>
    </div>
  );
}
