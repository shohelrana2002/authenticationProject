import { createBrowserRouter } from "react-router";
import MainLayOut from "../Root/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  { path: "/singIn", Component: Login },
  { path: "/singUp", Component: Register },
]);
