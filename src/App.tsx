import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, HomeDashboard, Login, Submenu1, Submenu1Create, Submenu2 } from "./pages";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/dashboard/submenu-1" element={<Submenu1 />} />
        <Route path="/dashboard/submenu-1/create" element={<Submenu1Create />} />
        <Route path="/dashboard/submenu-2" element={<Submenu2 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
