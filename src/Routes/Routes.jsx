import { createBrowserRouter } from "react-router";
import MainLayOut from "../Root/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import NewsCard from "../components/NewsCard/NewsCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/newsCard/:id",
        loader: () => fetch("/news.json"),
        Component: NewsCard,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
    ],
  },
  { path: "/singIn", Component: Login },
  { path: "/singUp", Component: Register },
]);
