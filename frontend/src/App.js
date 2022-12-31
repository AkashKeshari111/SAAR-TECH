import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import MensFasion from "./Pages/product/MensFasion";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { AdminRoutes } from "./Router/AdminRoutes";

import Address from "./Pages/Cart/Address";

import Thanku from "./Pages/Thanku/Thanku";

import AdminProfile from "./Pages/Profile/AdminProfile";
import UserProfile from "./Pages/Profile/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const token=useSelector((state)=>state.AuthReducer.token)
  return <div className="App">
    {token? <><AllRoutes/><AdminRoutes/></>: <AllRoutes/>}


  </div>;
}

export default App;
