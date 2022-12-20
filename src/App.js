import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin/Admin";
import Home from "./components/Home/Home/Home";
import ServiceList from "./components/Home/ServiceList/ServiceList";
import Login from "./components/Login/Login";
import UserPanel from "./components/MyOrder/UserPanel/UserPanel";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const appContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  return (
    <div className="App">
      <appContext.Provider
        value={{
          loggedInUser,
          setLoggedInUser,
          loadingSpinner,
          setLoadingSpinner,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:category" element={<ServiceList />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            <Route
              path="/myOrder"
              element={
                <PrivateRoute>
                  <UserPanel />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </appContext.Provider>
    </div>
  );
}

export default App;
