import { createBrowserRouter } from "react-router";
import MainLayOut from "../Root/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import NewsCard from "../components/NewsCard/NewsCard";
import Details from "../components/NewsCard/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
        Component: Home,
      },
      {
        path: "/newsCard/:id",
        loader: () => fetch("/news.json"),
        Component: NewsCard,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/news.json"),
        Component: Details,
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
