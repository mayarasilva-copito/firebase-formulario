import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import "./userlist.css";

function UserList() {
  const [usuarios, setUsuarios] = useState([]);

  const [editandoID, setEditandoID] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");
  const [edadEditada, setEdadEditada] = useState("");
  const [dniEditado, setDniEditado] = useState("");
  const [correoEditado, setCorreoEditado] = useState("");
  const [nacionalidadEditada, setNacionalidadEditada] = useState("");

  const editarUsuario = async (id) => {
    const usuarioRef = doc(db, "usuarios", id);
    await updateDoc(usuarioRef, {
      nombre: nombreEditado,
      edad: edadEditada,
      correo: correoEditado,
      nacionalidad: nacionalidadEditada,
      dni: dniEditado,
    });
    setEditandoID(null);
  };

  useEffect(() => {
    const ObtenerUsuarios = onSnapshot(
      collection(db, "usuarios"),
      (snapshot) => {
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsuarios(lista);
      }
    );

    return () => ObtenerUsuarios();
  }, []);

  const eliminarUsuario = async (id) => {
    const confirmar = window.confirm("¿Confirmar eliminación?");
    if (confirmar) {
      await deleteDoc(doc(db, "usuarios", id));
      alert("Eliminado con éxito ✅");
    } else {
      alert("Cancelado ❌");
    }
  };

  return (
    <>
      <div className="usuario">
        <h2>📋Lista de Usuarios en Firebase📋</h2>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {editandoID === usuario.id ? (
                <>
                  <input
                    type="text"
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    placeholder="Nombre"
                  />
                  <input
                    type="number"
                    value={edadEditada}
                    onChange={(e) => setEdadEditada(e.target.value)}
                    placeholder="Edad"
                  />
                  <input
                    type="number"
                    value={dniEditado}
                    onChange={(e) => setDniEditado(e.target.value)}
                    placeholder="DNI"
                  />

                  <input
                    type="email"
                    value={correoEditado}
                    onChange={(e) => setCorreoEditado(e.target.value)}
                    placeholder="correo"
                  />
                  <input
                    type="text"
                    value={nacionalidadEditada}
                    onChange={(e) => setNacionalidadEditada(e.target.value)}
                    placeholder="Nacionalidad"
                  />
                  <button onClick={() => editarUsuario(usuario.id)}>
                    Guardar
                  </button>
                  <button onClick={() => setEditandoID(null)}>Cancelar</button>
                </>
              ) : (
                <>
                  <strong>{usuario.nombre}</strong> - {usuario.edad} años -{" "}
                  {usuario.correo} - {usuario.nacionalidad} - {usuario.dni}
                  <button
                    onClick={() => {
                      setEditandoID(usuario.id);
                      setNombreEditado(usuario.nombre);
                      setEdadEditada(usuario.edad);
                      setDniEditado(usuario.dni);
                      setCorreoEditado(usuario.correo);
                      setNacionalidadEditada(usuario.nacionalidad);
                    }}
                  >
                    Editar✏️
                  </button>
                  <button onClick={() => eliminarUsuario(usuario.id)}>
                    Eliminar🗑️
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserList;
