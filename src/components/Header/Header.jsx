import logo from "./../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex ju items-center flex-col">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE ,MMMM dd, yyy")}</p>
    </div>
  );
};

export default Header;
