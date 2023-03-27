import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Live from "../pages/Live";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aovivo",
    element: <Live />,
  },
]);