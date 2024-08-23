import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

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

  if (user || loading) return;

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
      <div className='my-40 flex w-full max-w-md mx-auto overflow-hidden lg:max-w-4xl'>
        <div className='hidden bg-cover bg-center lg:block lg:w-1/2'>
          {/* <Lottie animationData={loginImg}></Lottie> */}
        </div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-8'
              src=""
              alt=''
            />
          </div>

          <h1 className='mt-3 text-xl text-center text-gray-600'>
            Welcome back!
          </h1>

          <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50'>
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                {/* Google Icon SVG */}
              </svg>
            </div>
            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>

          <div onClick={handleGitHubSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50'>
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                {/* GitHub Icon SVG */}
              </svg>
            </div>
            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with GitHub
            </span>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b lg:w-1/4'></span>
            <div className='text-xs text-center text-gray-500 uppercase hover:underline'>
              or login with email
            </div>
            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleEmailSignIn}>
            <div className='mt-4'>
              <label className='block mb-2 text-sm font-medium text-gray-600' htmlFor='LoggingEmailAddress'>
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label className='block mb-2 text-sm font-medium text-gray-600' htmlFor='loggingPassword'>
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg bg-[#4682B4] hover:bg-[#4169E1] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign In
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b md:w-1/4'></span>
            <Link
              to='/SignUp'
              className='text-xs text-gray-500 uppercase hover:underline'
            >
              or sign up
            </Link>
            <span className='w-1/5 border-b md:w-1/4'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
