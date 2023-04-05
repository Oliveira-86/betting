import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Casino from "../pages/Casino";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cassino",
    element: <Casino />,
  },
]);