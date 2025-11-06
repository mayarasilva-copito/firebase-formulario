import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./registrarusuario.css"; // 👈 Importamos el CSS separado

function RegistrarUsuario({ onRegister, cambiarVista }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Funcion para registrar
  const registrar = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Cuenta creada con éxito");
        onRegister(user);
      })
      .catch((error) => {
        console.log("Error al registrar el usuario");
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="registrar-container">
      <h1>✨ Crear Cuenta</h1>
      <input
        type="email"
        placeholder="📧 Escribe tu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="🔒 Escribe tu Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn-registrar" onClick={registrar}>
        Crear Cuenta ✨
      </button>
      <p>¿Ya tienes una cuenta?</p>
      <button className="btn-iniciar" onClick={cambiarVista}>
        Iniciar Sesión 🔑
      </button>
    </div>
  );
}

export default RegistrarUsuario;
