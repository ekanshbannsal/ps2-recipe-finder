import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Meals from "./components/Meals";
import MealDetail from "./components/MealDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 Recipe Finder</p>
      </footer>
    </div>
  );
}

export default App;
