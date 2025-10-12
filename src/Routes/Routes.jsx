import { createBrowserRouter } from "react-router";
import MainLayOut from "../Root/MainLayOut";
import Home from "../Pages/Home/Home";

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
]);
