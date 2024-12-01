import { Banner } from "./components/Banner";
import { Homepage } from "./pages/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Marketplace } from "./pages/Marketplace";
import { AboutMe } from "./pages/AboutMe";
import { LoginSuggest } from "./components/LoginSuggest";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<LoginSuggest />} />
        <Route path="/homepage" element={<Homepage />}>
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
