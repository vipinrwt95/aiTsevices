import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Navbar from "../Layout/Navbar";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
     
    </div>
  );
};

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routeConfig: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

const RenderRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default RenderRoute;
