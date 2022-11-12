import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from "./Pages/Cart/Address";


function App() {
  return (
    <div className="App">
      <Navbar />
       {/* <Address/>  */}
      <AllRoutes />
      <Footer />
    
    </div>
  );
}

export default App;
