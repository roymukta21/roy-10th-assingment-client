
import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";


export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!user)
    return <Navigate to="/Login" state={{ from: location }} replace />;

  return children;
}
