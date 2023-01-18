import "./App.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import SportsBar from "./Sportsbar/SportsBar";
import Coach from "./Coach/Coach";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/coaches" element={<Coach />} />
        <Route path="/sports_bar" element={<SportsBar />} />
      </Routes>
    </div>
  );
}

export default App;
