import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Casino from "../pages/Casino";
import Live from "../pages/Live";
import Auth from "../atomic-components/templates/Login";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/aovivo",
    element: <Live />,
  },
  {
    path: "/cassino",
    element: <Casino />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);