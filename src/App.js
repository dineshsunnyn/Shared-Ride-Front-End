import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";
import LookForRide from "./components/LookForRide";
import GiveRide from "./components/GiveRide";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {/* HomePage is the main layout for the app */}
            <Route path="/" element={<HomePage />}>
              {/* Default Route (HomePage content) */}
              <Route index element={<h1>Welcome to the Homepage!</h1>} />

              {/* This is the Login route, rendered inside the HomePage */}
              <Route path="login" element={<Login />} />

              {/* Add other routes as necessary */}
              <Route path="lookforride" element={<LookForRide />} />
              <Route path="giveride" element={<GiveRide/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
