import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import app from "./firebase";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import RegistrarUsuario from "./components/RegistrarUsuario";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);
  console.log(app);

  return (
    <>
      <div>
        <h1 className="text-center">Mi pagina web con React y Firebase</h1>
      </div>
      <div className="Login">
        <p className="logi">
          <Login />
        </p>
      </div>
      <div className="registrar">
        <p className="regi">
          <RegistrarUsuario />
        </p>
      </div>
      <div className="contenedor">
        <p className="p1">
          <AddUser />
        </p>
      </div>
      <div className="user">
        <p className="p2">
          <UserList />
        </p>
      </div>
    </>
  );
}

export default App;
