import "./App.css";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Route , Routes} from "react-router-dom";
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
  <div className="w-100% h-100% bg-richblack-900 flex flex-col">
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="signup" element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
    </Routes>


  </div>);
}

export default App;
