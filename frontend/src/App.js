
import AllRoutes from "./Router/AllRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { AdminRoutes } from "./Router/AdminRoutes";
import { useSelector } from "react-redux";

function App() {
  const token=useSelector((state)=>state.AuthReducer.token)
  return <div className="App">
    {token? <><AllRoutes/><AdminRoutes/></>: <AllRoutes/>}

  </div>;
}

export default App;
