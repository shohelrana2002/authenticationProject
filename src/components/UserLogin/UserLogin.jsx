import { Link } from "react-router";
import userPng from "./../../assets/user.png";
import useGetAuth from "../../Hooks/useGetAuth";
import { auth } from "../../AuthProvider/AuthProvider";
const UserLogin = () => {
  const { user, handleSingOut } = useGetAuth();
  const handleLogOut = () => {
    handleSingOut(auth).then(() => {});
  };
  return (
    <div className="flex items-center  gap-x-2">
      {user ? (
        <img
          className="w-12 h-12 rounded-full"
          src={user?.photoURL || userPng}
          alt={user?.displayName || "User Photo"}
        />
      ) : (
        <img src={userPng} alt={userPng} />
      )}
      {user ? (
        <button onClick={handleLogOut} className="btn btn-neutral">
          LogOut
        </button>
      ) : (
        <Link to={"/singIn"} className="btn btn-neutral">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserLogin;
