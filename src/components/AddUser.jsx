import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./add.css";

function AddUser() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [dni, setDni] = useState("");

  const AgregarUsuarios = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: nombre,
        edad: edad,
        correo: correo,
        dni: dni,
        nacionalidad: nacionalidad,
        fechaRegistro: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Usuario agregado ✅");
      setNombre("");
      setEdad("");
      setDni("");
      setCorreo("");

      setNacionalidad("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <form className="formu" onSubmit={AgregarUsuarios}>
        <h1 className="form-title">🌸📋Formulario</h1>

        <div className="contenedor-form">
          <label className="form-label">📝Nombre:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label className="form-label">📅Edad:</label>
          <input
            className="form-input"
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <label className="form-label">🪪DNI:</label>
          <input
            className="form-input"
            type="number"
            placeholder="Número de DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />

          <label className="form-label">📧Correo:</label>
          <input
            className="form-input"
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <label className="form-label">🌎Nacionalidad:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Ej: Peruana"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
          />

          <button className="form-button" type="submit">
            Agregar usuario
          </button>
        </div>
      </form>
    </>
  );
}

export default AddUser;
