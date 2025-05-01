import { FaUsers, FaMoneyCheckAlt, FaBook, FaSchool } from "react-icons/fa";
import "./sidebar.css";

interface SidebarProps {
  setSelectedOption: (option: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({
  setSelectedOption,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
      <button
        className="toggle-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {isSidebarOpen && (
        <>
          <h3>
            <FaSchool /> CRM Colegio
          </h3>
          <ul>
            <li onClick={() => setSelectedOption("Seguimientos")}>
              <FaUsers /> Seguimientos
            </li>
            <li onClick={() => setSelectedOption("Nómina")}>
              <FaMoneyCheckAlt /> Nómina
            </li>
            <li onClick={() => setSelectedOption("Notas")}>
              <FaBook /> Notas
            </li>
          </ul>
        </>
      )}
    </div>
  );
}









