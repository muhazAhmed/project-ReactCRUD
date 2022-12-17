import React from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./style.scss"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Update from "./pages/Update";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PaymentGateway from "./pages/PaymentGateway";

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
        element : <Layout/>,
        children: [
            {path: "/", element: <Home />},
            {path: "/user/dashboard", element: <Dashboard />},
            {path: "/user/update", element: <Update />},
            {path: "/contact", element: <Contact />},
            {path: "/about", element: <About />},
            {path: "/user/buy", element: <PaymentGateway />},
          
        ],
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
