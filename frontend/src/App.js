import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminRoutes } from "./Router/AdminRoutes";
import Address from "./Pages/Cart/Address";




function App() {
  return (
    <div className="App">


      
      <AllRoutes/>
      <AdminRoutes/>

    </div>
  );
}

export default App;
