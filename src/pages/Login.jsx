import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGitHub, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state || '/';

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result?.user?.email);
      toast.success('Sign in with Google successful');
      navigate(form, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message.slice(22, -2));
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithGitHub();
      console.log(result?.user?.email);
      toast.success('Sign in with GitHub successful');
      navigate(form, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message.slice(22, -2));
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signIn(email, password);
      console.log(result?.user?.email);
      toast.success('Sign in successful');
      navigate(form, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message.slice(22, -2));
    }
  };

  if (user || loading) return <LoadingSpinner/>;

  return (
    <div className='flex items-center justify-center min-h-screen p-4 mt-12'>
      <div className='w-full max-w-md mx-auto flex flex-col items-center'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-700'>HomeNest</h1>
        </div>

        <h2 className='text-xl text-gray-700 mb-6'>Welcome back!</h2>

        <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center w-full mb-4 p-2 border rounded-lg text-gray-700 transition-colors duration-300 hover:bg-gray-100'>
          <FaGoogle className='w-6 h-6 mr-2' />
          <span className='font-bold'>Sign in with Google</span>
        </div>

        <div onClick={handleGitHubSignIn} className='flex cursor-pointer items-center justify-center w-full mb-4 p-2 border rounded-lg text-gray-700 transition-colors duration-300 hover:bg-gray-100'>
        <IoLogoGithub className='w-6 h-6 mr-2' />
          <span className='font-bold'>Sign in with GitHub</span>
        </div>

        <div className='flex items-center justify-between w-full mb-6'>
          <span className='w-1/5 border-b'></span>
          <div className='text-xs text-gray-500 uppercase'>or login with email</div>
          <span className='w-1/5 border-b'></span>
        </div>

        <form onSubmit={handleEmailSignIn} className='w-full'>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor='LoggingEmailAddress'>Email Address</label>
            <input
              id='LoggingEmailAddress'
              autoComplete='email'
              name='email'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
              type='email'
            />
          </div>

          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor='loggingPassword'>Password</label>
            <input
              id='loggingPassword'
              autoComplete='current-password'
              name='password'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
              type='password'
            />
          </div>

          <button
            type='submit'
            className='w-full p-3 font-semibold text-white bg-gray-700 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out'
          >
            Sign In
          </button>
        </form>

        <div className='flex items-center justify-between w-full mt-6'>
          <span className='w-1/5 border-b'></span>
          <Link to='/SignUp' className='text-xs text-gray-500 uppercase hover:underline'>or sign up</Link>
          <span className='w-1/5 border-b'></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
