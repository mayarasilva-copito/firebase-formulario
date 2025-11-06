import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./login.css"; // 👈 Importa el archivo CSS

const provider = new GoogleAuthProvider();

function Login({ onLogin, cambiarVista }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Se inició sesión");
        onLogin(user);
      })
      .catch(() => {
        console.log("Error al iniciar sesión");
      });
  };

  const iniciarSesionGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("Iniciaste sesión con Google");
        onLogin(user);
      })
      .catch((error) => {
        console.log("Error al iniciar con Google");
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <h1>🧑‍💻 Iniciar Sesión</h1>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn-iniciar" onClick={iniciarSesion}>
        Iniciar Sesión
      </button>
      <button className="btn-google" onClick={iniciarSesionGoogle}>
        🔵 Iniciar Sesión con Google
      </button>
      <p>No tienes una cuenta?</p>
      <button className="btn-crear" onClick={cambiarVista}>
        Crear cuenta ✨
      </button>
    </div>
  );
}

export default Login;
