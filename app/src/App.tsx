import SideMenu from "./routes/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
