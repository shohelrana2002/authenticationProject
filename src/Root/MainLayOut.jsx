import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LeftAside from "../components/LayOutAside/leftAside";
import Marquee from "../components/Marquees/Marquees";

import Nav from "../components/Nav/Nav";
import UserLogin from "../components/UserLogin/UserLogin";
import RightAside from "../components/LayOutAside/RightAside";
import Title from "../components/Title/Title";

const MainLayOut = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div>
        <Marquee />
        <div className="flex justify-center flex-1 items-center">
          <div className="flex flex-1 justify-center">
            <Nav />
          </div>
          <div className="flex justify-end">
            <UserLogin />
          </div>
        </div>
      </div>
      <Title />
      <div className="grid *:border grid-cols-12  gap-x-3">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <div className="col-span-6">
          <Outlet />
        </div>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </div>
    </div>
  );
};

export default MainLayOut;
