import useGetAuth from "../Hooks/useGetAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useGetAuth();
  const location = useLocation();
  if (loading) {
    return <p>Loading....</p>;
  }
  if (!user) {
    return <Navigate to={"/singIn"} state={location?.pathname} replace />;
  }

  return children;
};

export default PrivateRoutes;
