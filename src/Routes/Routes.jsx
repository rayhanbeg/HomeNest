import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CardDetails from "../components/EstateSection/CardDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../components/Error/Error";
import Contact from "../components/Pages/Contact";
import Profile from "../components/Profile/Profile";

export const router = createBrowserRouter ([
    {
      path:'/',
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          // loader: () => fetch('/FakeData.json'),
        },
        {
          path: '/card/:id',
          element: <PrivateRoute>
            <CardDetails/>
          </PrivateRoute>,
          // loader: () => fetch(`/Estate.json`),
          
        },
        {
          path: '/contact',
          element: <PrivateRoute>
            <Contact/>
          </PrivateRoute>,
          
        },
        {
          path: '/update-profile',
          element: <PrivateRoute>
            <Profile/>
          </PrivateRoute>,
          
        },
        {
          path: '/SignIn',
          element: <Login/>
      },
        {
          path: '/SignUp',
          element: <SignUp/>
      },
        
      ]
    }
    
  ])

  export default router