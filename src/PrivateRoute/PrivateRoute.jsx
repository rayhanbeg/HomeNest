import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    return <LoadingSpinner/>;
  }
  return (
    <Navigate to="/SignIn" state={location?.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoute;
