import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewItem from "./pages/NewItem";
import TrackingList from "./pages/TrackingList";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/new_item">Новая посылка</Link>
          </li>
          <li>
            <Link to="/track_list">Список доставок</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_item" element={<NewItem />} />
        <Route path="/track_list" element={<TrackingList />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
