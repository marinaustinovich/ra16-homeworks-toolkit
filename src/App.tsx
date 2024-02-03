import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Error404, FavoritesPage, MainPage, Menu, MovieCard } from "./components";

const App = () => (
  <Router>
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/:id" element={<MovieCard />} />
      </Routes>
    </div>
  </Router>
);

export default App;
