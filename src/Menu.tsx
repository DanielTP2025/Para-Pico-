import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import "./menu.css";

export default function Menu() {
  const [selectedOption, setSelectedOption] = useState("Inicio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container">
      <header className="header">
        <h1>Schoolarium</h1>
        <p className="subtitle">La organización en un solo lugar</p>
        <button className="logout-button">Cerrar sesión</button>
      </header>

      <Sidebar
        setSelectedOption={setSelectedOption}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className={`main-content ${isSidebarOpen ? "with-sidebar" : ""}`}>
        <h2>{selectedOption}</h2>
        <p>Bienvenido, selecciona una opción del menú.</p>
      </main>
    </div>
  );
}

