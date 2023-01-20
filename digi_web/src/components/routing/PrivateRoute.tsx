import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isUserAuthenticatedSelector } from "../../selectors/isUserAuthenticatedSelector";
import { RootState } from "../../store";
function PrivateRoute({ children }: any) {
  const isAuthenticated = useSelector(isUserAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
