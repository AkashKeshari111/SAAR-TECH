import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminRoutes } from "./Router/AdminRoutes";



function App() {
  return (
    <div className="App">

{/* <------------commnet---------------> */}
      
      <AllRoutes/>
      <AdminRoutes/>
    {/* <MensFasion/> */}

    </div>
  );
}

export default App;
