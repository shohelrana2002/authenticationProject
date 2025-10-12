import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-123px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
