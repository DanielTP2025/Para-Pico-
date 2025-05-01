import React, { useState } from "react";
import { supabase } from "../db";
import "./Estudiantes.css";

const Estudiantes = () => {
  const [estudianteId, setEstudianteId] = useState("");
  const [estudiante, setEstudiante] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarEstudiante = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("estudiantes") // Asegúrate que la tabla se llame así en Supabase
      .select("*")
      .eq("id", estudianteId)
      .single();

    if (error) {
      console.error("Error al buscar estudiante:", error.message);
      setEstudiante(null);
    } else {
      setEstudiante(data);
    }

    setLoading(false);
  };

  return (
    <div className="estudiantes-modulo">
      <div className="estudiantes-busqueda">
        <input
          type="text"
          placeholder="Buscar estudiante por ID"
          value={estudianteId}
          onChange={(e) => setEstudianteId(e.target.value)}
        />
        <button onClick={buscarEstudiante}>Buscar</button>
      </div>

      <div className="estudiantes-info">
        {loading ? (
          <p>Cargando...</p>
        ) : estudiante ? (
          <div>
            <h3>Estudiante encontrado:</h3>
            <p><strong>Nombre:</strong> {estudiante.nombre}</p>
            <p><strong>Apellido:</strong> {estudiante.apellido}</p>
            <p><strong>Email:</strong> {estudiante.email}</p>
          </div>
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </div>
  );
};

export default Estudiantes;


