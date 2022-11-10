import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    
    </div>
  );
}

export default App;
