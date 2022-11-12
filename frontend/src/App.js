import "./App.css";
import Singleproduct from './Pages/single/singleproduct';
import MensFasion from './Pages/product/MensFeshion';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from "./Pages/Cart/Address";



function App() {
  return (
    <div className="App">

{/* <------------commnet---------------> */}
      <Navbar />
       {/* <Address/>  */}
      <AllRoutes />
      <Footer />
    {/* <MensFasion/> */}

    </div>
  );
}

export default App;
