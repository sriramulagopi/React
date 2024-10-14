import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import LoginWrapper from "./loginwrapper";
import "./style.css";
import { BrowserRouter, Route, Routes,Link, useNavigate } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const AuthContext = createContext();
const App = function () {
  const [isUserLogin, setIsUserLogin] = useState(()=>Boolean(localStorage.getItem("token")));
  const Logged = function(){
    const navigate = useNavigate();
    const logout = function(){
      setIsUserLogin(false);
      localStorage.removeItem("token");
      navigate("/login");
    }
    return <div>
      <h1>Your are logged in user</h1>
      <button onClick={logout}>Logout</button>
    </div>
  }
  return (
    <div>
      <AuthContext.Provider value={{ isUserLogin, setIsUserLogin }}>
        <LoginWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="user" Component={Logged} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>This is the not page your looking for</h1>
                    <h4>
                      Click here to navigate to home page{" "}
                      <Link to="/login">click</Link>
                    </h4>
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </LoginWrapper>
      </AuthContext.Provider>
    </div>
  );
};
root.render(<App />);
