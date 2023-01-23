import "./App.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import SportsBar from "./Sportsbar/SportsBar";
import Coach from "./Coach/Coach";
import Simulators from "./Simulators/Simulators";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import Main from "./Main/Main";
import Massage from "./Massage/Massage";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/simulators" element={<Simulators />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/coaches" element={<Coach />} />
        <Route path="/sports_bar" element={<SportsBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/admin/form" element={<Form/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
