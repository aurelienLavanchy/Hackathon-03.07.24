import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [currentFont, setCurrentFont] = useState();

  return (
    <main>
      <Navbar />
      <Outlet context={{ currentFont, setCurrentFont }} />
    </main>
  );
}
