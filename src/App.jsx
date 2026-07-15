import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;