import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import MensFasion from "./Pages/product/MensFeshion";


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      <MensFasion/>
      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
