import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import LoadingSpinner from "../Shared/LoadingSpinner";

const SignUp = () => {
  const { user, loading, setUser, createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state || "/";

  // Helper function to validate password
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && isValidLength;
  };

  // Sign up
  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Validate password
    if (!validatePassword(password)) {
      return toast.error("Password must be at least 6 characters long, include an uppercase letter, and a lowercase letter.");
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ user, photoURL: photo, displayName: name });
      toast.success("Sign Up successful");
      navigate("/");
    } catch (error) {
      toast.error("Error: " + error.message.slice(22, -2));
    }
  };

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      toast.success("Sign in successful");
      navigate(form, { replace: true });
    } catch (error) {
      toast.error("Error: " + error.message.slice(22, -2));
    }
  };

  if (user || loading) return <LoadingSpinner/>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 mt-12">
      <div className="max-w-md w-full bg-white rounded-lg p-8">
        <div className="flex justify-center items-center mb-6 ">
          <h1 className="text-3xl font-bold text-gray-700">HomeNest</h1>
        </div>

        <h1 className="mt-3 text-xl text-center text-gray-700">Create Your Account</h1>

        <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-700 transition-colors duration-300 transform border rounded-lg hover:bg-gray-100'>
            <div className='px-4 py-2'>
            <FaGoogle className="w-6 h-6 mr-2" />
            </div>
            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>

        <div className="flex items-center justify-between mb-6">
          <span className="flex-grow border-t border-gray-300"></span>
          <span className="mx-4 text-gray-600">or sign up with email</span>
          <span className="flex-grow border-t border-gray-300"></span>
        </div>

        <form onSubmit={handleEmailSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              id="photo"
              name="photo"
              type="text"
              autoComplete="photo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 font-semibold text-white bg-gray-700 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <span className="flex-grow border-t border-gray-300"></span>
          <Link to="/SignIn" className="text-sm text-gray-600 hover:underline">Already have an account? Sign In</Link>
          <span className="flex-grow border-t border-gray-300"></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
