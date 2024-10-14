import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import {Spin} from "antd";
import { AuthContext } from ".";
const Login = lazy(()=>import("./login"));
const Signup = lazy(()=>import("./signup"));
const LoginWrapper = function ({ children }) {
    const {isUserLogin,setIsUserLogin}=useContext(AuthContext)
  if (!isUserLogin) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<PageLoadingWrapper><Login/></PageLoadingWrapper>} />
          <Route path="signup" element={<PageLoadingWrapper><Signup/></PageLoadingWrapper>} />
          <Route path="*" element={<div>
            <h1>This is the not page your looking for</h1>
            <h4>Click here to navigate to home page <Link to="/login">click</Link></h4>
          </div>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  return <div>
    {children}
  </div>;
};
export default LoginWrapper;
const PageLoadingWrapper = function({children}){
    return <Suspense fallback={<div style={{padding:"100px"}}><Spin size="large"/></div>}>
        {children}
    </Suspense>
}