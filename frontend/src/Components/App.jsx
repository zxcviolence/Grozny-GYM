import "./App.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import SportsBar from "./Sportsbar/SportsBar";
import Coach from "./Coach/Coach";
import Simulators from "./Simulators/Simulators";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Main from "./Main/Main";
import Massage from "./Massage/Massage";
import Form from "./Form/Form";
import CoachForm from "./Form/CoachForm";
import OneElementBar from "./Sportsbar/oneElementBar/OneElementBar";
import FormV from "../Components/Job/FormV";
import Footer from "./Footer/Footer";
import Admin from "./AdminPanel/Admin";
import EditUser from "./AdminPanel/EditUser/EditUser";
import Job from "./Job/Job";
import AddSims from "./AdminPanel/Simulators/AddSims";
import AddBar from "./AdminPanel/Sportbar/AddBar";

function App() {
  return (
    <div className="App">
      {window.location.pathname === "/profile/" ||
      window.location.pathname === "/profile/edituser/" ||
      window.location.pathname === "/profile" ||
      window.location.pathname === "/profile/edituser" ||
      window.location.pathname === "/admin/add/simulators" ||
      window.location.pathname === "/admin/add/simulators/" || 
      window.location.pathname === "/admin/sportbar" ||
      window.location.pathname === "/admin/sportbar/" ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/profile" element={<Admin />} />
        <Route path="/simulators" element={<Simulators />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/job" element={<Job />} />
        <Route path="/coaches" element={<Coach />} />
        <Route path="/job" element={<Job />} />
        <Route path="/sports_bar" element={<SportsBar />} />
        <Route path="/sports_bar/:id" element={<OneElementBar />} />
        <Route path="/profile/edituser" element={<EditUser />} />
        <Route path="/sports_bar/:id" element={<OneElementBar />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/vacation" element={<FormV />} />
        <Route path="/admin/add/simulators" element={<AddSims />} />
        <Route path="/admin/sportbar" element={<AddBar />} />
        <Route path="/admin/form" element={<Form />} />
        <Route path="/admin/coachform" element={<CoachForm />} />
      </Routes>
      {window.location.pathname === "/profile/" ||
      window.location.pathname === "/profile/edituser/" ||
      window.location.pathname === "/profile" ||
      window.location.pathname === "/profile/edituser" ||
      window.location.pathname === "/admin/add/simulators" ||
      window.location.pathname === "/admin/add/simulators/" || 
      window.location.pathname === "/admin/sportbar" ||
      window.location.pathname === "/admin/sportbar/" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
