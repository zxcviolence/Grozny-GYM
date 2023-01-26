import "./App.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import SportsBar from "./Sportsbar/SportsBar";
import Coach from "./Coach/Coach";
import Simulators from "./Simulators/Simulators";
import OneSimulator from "./Simulators/OneSimulator";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import Main from "./Main/Main";
import Massage from "./Massage/Massage";
import Form from "./Form/Form";
import CoachForm from "./Form/CoachForm";
import OneElementBar from "./Sportsbar/oneElementBar/OneElementBar";
import Footer from "./Footer/Footer";
import Admin from "./AdminPanel/Admin";
import EditUser from "./AdminPanel/EditUser/EditUser";
import Job from "./Job/Job";

function App() {
  return (
    <div className="App">
      {window.location.pathname === "/admin/" ||
      window.location.pathname === "/profile/edituser/" ||
      window.location.pathname === "/admin" ||
      window.location.pathname === "/profile/edituser" ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/simulators" element={<Simulators />} />
        <Route path="/simulators/:id" element={<OneSimulator />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/job" element={<Job />} />
        <Route path="/coaches" element={<Coach />} />
        <Route path="/sports_bar" element={<SportsBar />} />
        <Route path="/sports_bar/:id" element={<OneElementBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edituser" element={<EditUser />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/admin/form" element={<Form />} />
        <Route path="/admin/coachform" element={<CoachForm />} />
      </Routes>
    </div>
  );
}

export default App;
