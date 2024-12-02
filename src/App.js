import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewItem from "./pages/NewItem";
import TrackingList from "./pages/TrackingList";

function App() {
  return (
    <Router>
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
