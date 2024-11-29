import { Banner } from "./components/Banner";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Homepage } from "./pages/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Marketplace } from "./pages/Marketplace";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<Marketplace/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
