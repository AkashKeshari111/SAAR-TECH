

import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import MensFasion from "./Pages/product/MensFasion";
import Navbar from "./Components/Navbar/Navbar"
import "./App.css";
import { AdminRoutes } from "./Router/AdminRoutes";
import AdminProfile from "./Pages/Profile/AdminProfile"



function App() {
  return (
    <div className="App">



      

      <AllRoutes/>
    <AdminProfile></AdminProfile>
      {/* <AdminRoutes/> */}
     


    </div>
  );
}

export default App;
