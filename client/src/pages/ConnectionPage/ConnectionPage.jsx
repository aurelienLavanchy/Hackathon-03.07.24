import "./ConnectionPage.css";
import Connection from "../../components/Connection/Connection";
import SignUp from "../../components/SignUp/SignUp";

export default function ConnectionPage() {
  return (
    <main className="forms">
      <Connection />
      <SignUp />
    </main>
  );
}
