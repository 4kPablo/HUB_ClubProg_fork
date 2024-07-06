import SkillBox from "../../Intereses/interes";
import "../base/ProyectoBoxStyles.css";
import "./NuevoProyectoBoxStyles.css";

export default function NuevoProyectoBox(proyecto) {
  return (
    <div className="proyectoBox nuevoProyeto">
      <div className="info">
        <h1>{proyecto.data.titulo}</h1>
        <p>{proyecto.data.descripcion}</p>
      </div>
      <div className="right">
        <button type="button" className="btn btn-dark">
          + INFORMACION
        </button>
      </div>
    </div>
  );
}
