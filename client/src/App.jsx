import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  const [currentFont, setCurrentFont] = useState();

  return (
    <main>
      <Outlet context={{ currentFont, setCurrentFont }} />
    </main>
  );
}
