
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import MensFasion from "./Pages/product/MensFasion";
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
    
       {/* <AllRoutes />    */}
       {/* <MensFasion/>   */}
      <MensFasion/> 
      <Footer /> 
    
    </div>
  );
}

export default App;
