import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <h2>🎬 Movie Explorer</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;