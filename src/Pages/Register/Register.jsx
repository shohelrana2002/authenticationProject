import { useState } from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import { Link, useNavigate } from "react-router";
import { auth } from "../../AuthProvider/AuthProvider";
import ImageUpload from "../../Hooks/ImageUpload";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { handleSignUp, handleUpdateUser, handleSendEmailVerification } =
    useGetAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSingUpForm = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const imageFile = e.target.image.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return alert("Please provide a password with at least 6 characters");
    }

    try {
      setLoading(true);
      await handleSignUp(email, password);
      const imageLink = await ImageUpload(imageFile);
      const updateData = {
        displayName: name,
        photoURL: imageLink.data?.display_url,
      };

      await handleSendEmailVerification(auth.currentUser);
      await handleUpdateUser(auth.currentUser, updateData);
      toast(" Send You email  Verification Your Account", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/singIn");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSingUpForm} className="space-y-5">
          {/* name Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* imag Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Your Image
            </label>
            <input
              required
              name="image"
              type="file"
              placeholder="Enter Your image"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* email field */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              pattern="[a-z0-9._%+-]+@gmail\.com$"
              title="Please enter a valid Gmail address (e.g. example@gmail.com)"
              required
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

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
          >
            {loading ? (
              <span className="loading loading-spinner text-neutral"></span>
            ) : (
              " Sign Up"
            )}
          </button>
        </form>
        <div className="my-3">
          <p className="text-blue-700">
            Already Have a Account ?{" "}
            <span className="text-green-700 underline">
              <Link to={"/singIn"}>Sing In </Link>
            </span>
            Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
