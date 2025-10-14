import user from "./../../assets/user.png";
const UserLogin = () => {
  return (
    <div className="flex items-center  gap-x-2">
      <img src={user} alt={user} />
      <button className="btn btn-neutral">Login</button>
    </div>
  );
};

export default UserLogin;
