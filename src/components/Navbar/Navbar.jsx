import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
import { ImSpinner8 } from "react-icons/im";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) { // Adjust the scroll distance as needed
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


 


  return (
    <div>
      <div className={`navbar ${scrolled ? 'scrolled' : ''} text-white`}>
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* Mobile Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="trans menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow bg-white duration-300 backdrop-blur-sm transition-backdrop-filter"
            >
              <li>
                <NavLink to='/' className={({isActive}) => isActive ? "active rounded-link" : "rounded-link"}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className={({isActive}) => isActive ? "active rounded-link" : "rounded-link"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to='/update-profile' className={({isActive}) => isActive ? "active rounded-link" : "rounded-link"}>Update profile</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            HomeNest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <NavLink to='/' className={({isActive}) => isActive ? "active rounded-link" : "rounded-link"}>Home</NavLink>
              </li>
          <li>
                <NavLink to='/contact' className={({isActive}) => isActive ? "active rounded-link" : "rounded-link"}>Contact Us</NavLink>
              </li>
              <li>
                <NavLink to='/update-profile' className={({isActive}) => isActive ? "active rounded-link" : "rounded-link"}>Update profile</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          { loading ? (
          <p className='animate-spin'><ImSpinner8/></p>
        ) : user ? (
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Profile" />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 bg-white duration-300 backdrop-blur-sm transition-backdrop-filter "
              >
                <li className="justify-between">
                  <span>{user.displayName}</span>
                </li>
                <li>
                  <button onClick={logOut}>Sign out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/SignIn" className="btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
