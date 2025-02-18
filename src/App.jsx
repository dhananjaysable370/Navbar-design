import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Whycats from "./pages/Whycats";
import Diet from "./pages/Diet";
import Home from "./pages/Home";
import AdoptMeow from "./pages/AdoptMeow";

function App() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-[80vh]">
        <Routes>
          <Route path="/Navbar-design" element={<Home />} />
          <Route path="/Navbar-design/overview" element={<Overview />} />
          <Route path="/Navbar-design/whycats" element={<Whycats />} />
          <Route path="/Navbar-design/diet" element={<Diet />} />
          <Route path="/Navbar-design/adopt" element={<AdoptMeow />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
