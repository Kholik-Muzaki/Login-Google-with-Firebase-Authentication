import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./admin/Pages/Dashboard/Dashboard";
import KelolaArtikel from "./admin/Pages/KelolaArtikel/KelolaArtikel";
import Login from "./admin/Pages/Login/Login";

function App() {
   return (
      <Router>
         <Routes>
            {/* Login */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />}/>
            {/* Admin */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/kelola-artikel" element={<KelolaArtikel />} />

            {/* Bendahara */}
            <Route path="/bendahara" element={<Dashboard />} />
         </Routes>
      </Router>
   );
}

export default App;
