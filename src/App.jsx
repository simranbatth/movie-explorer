import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;