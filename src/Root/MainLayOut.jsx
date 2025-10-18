import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LeftAside from "../components/LayOutAside/LeftAside";
import Marquee from "../components/Marquees/Marquees";
import Nav from "../components/Nav/Nav";
import UserLogin from "../components/UserLogin/UserLogin";
import RightAside from "../components/LayOutAside/RightAside";

const MainLayOut = () => {
  return (
    <div className="container mx-auto px-3 lg:px-6">
      {/* 🔹 Header Section */}
      <Header />

      {/* 🔹 Marquee Section */}
      <div className="flex justify-center mt-4">
        <div className="w-full  bg-gray-50 rounded-xl shadow p-2 text-center">
          <Marquee />
        </div>
      </div>

      {/* 🔹 Navigation + UserLogin */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-4">
        {/* Nav Center on Desktop */}
        <div className="flex justify-center w-full md:w-auto lg:flex-1">
          <div className="flex justify-center w-full">
            <Nav />
          </div>
        </div>

        {/* User Login Align Right */}
        <div className="flex justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
          <UserLogin />
        </div>
      </div>

      {/* 🔹 Main Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5 mt-8">
        {/* Left Aside */}
        <aside className="hidden md:block md:col-span-2 lg:col-span-3 bg-gray-50 rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-3 border-b pb-2">
            🗂 Category
          </h3>
          <LeftAside />
        </aside>

        {/* Main Content */}
        <main className="col-span-1 md:col-span-4 lg:col-span-6 bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-3 border-b pb-2">
            📰 Dragon News Home
          </h3>
          <Outlet />
        </main>

        {/* Right Aside */}
        <aside className="hidden lg:block lg:col-span-3 bg-gray-50 rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-3 border-b pb-2">
            🔐 Login With
          </h3>
          <RightAside />
        </aside>
      </div>
    </div>
  );
};

export default MainLayOut;
