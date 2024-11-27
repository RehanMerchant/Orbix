import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
