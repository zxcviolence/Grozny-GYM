import "./App.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import SportsBar from "./Sportsbar/SportsBar";
import Coach from "./Coach/Coach";
import Simulators from "./Simulators/Simulators";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Profile from "../Components/Profile/Profile";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <audio autoPlay>
        <source src={"assets/music/song.mp3"} />
      </audio>
      <Header />
      <Routes>
        <Route path="/simulators" element={<Simulators />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/coaches" element={<Coach />} />
        <Route path="/sports_bar" element={<SportsBar />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
