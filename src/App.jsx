import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import app from "./firebase";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [count, setCount] = useState(0);
  console.log(app);

  return (
    <>
      <div className="contenedor">
        <p className="p1">
          <AddUser />
        </p>
        <p className="p2">
          <UserList />
        </p>
      </div>
    </>
  );
}

export default App;
