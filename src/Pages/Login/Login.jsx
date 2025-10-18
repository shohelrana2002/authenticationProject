import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useGetAuth from "../../Hooks/useGetAuth";
// Register
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { handleSingIn, resetPassword, handleGoogle } = useGetAuth();

  const handleSingInform = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleSingIn(email, password)
      .then((result) => {
        if (!result?.user?.emailVerified) {
          return alert("Verified Your Account");
        }

        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((err) => console.log(err));
  };
  const emailRef = useRef();
  const handleForget = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        alert("Send your Reset Code.Plz Check your Gmail");
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleLoginFrom = () => {
    handleGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSingInform} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              pattern="[a-z0-9._%+-]+@gmail\.com$"
              title="Please enter a valid Gmail address (e.g. example@gmail.com)"
              required
              ref={emailRef}
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                minLength={6}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-lg"
                onClick={() => setShow(!show)}
              >
                {show ? "🤦‍♀️" : "🤷‍♀️"}
              </span>
            </div>
          </div>
          {/* forget password */}
          <div>
            <a onClick={handleForget} className="link link-hover">
              Forgot password?
            </a>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>
        <div className="my-3">
          <p className="text-blue-700">
            Are You New Plz ?
            <span className="text-green-700 underline">
              <Link to={"/singUp"}>Sing Up </Link>
            </span>
            Now
          </p>
        </div>
        <div>
          <p>Login with Social Link</p>
          <div className="flex justify-center gap-x-4 my-2">
            <button onClick={handleGoogleLoginFrom} className="btn btn-primary">
              Google
            </button>
            <button className="btn btn-info">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
