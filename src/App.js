import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Films } from './pages/films/films';
import { Home } from './pages/home/home';

const App = () => {

  return (
    <Router>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/filmes" element={<Films />} />
      </Routes>
    </Router>
  );
}

export default App;
