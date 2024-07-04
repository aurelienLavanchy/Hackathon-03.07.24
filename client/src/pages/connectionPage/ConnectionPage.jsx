import "./ConnectionPage.css";
import Connection from  "../../components/connection/Connection"
import SignUp from "../../components/signup/Signup"

export default function ConnectionPage() {
  return (
    <main className="forms">
      <Connection />
      <SignUp />
    </main>
  );
}
