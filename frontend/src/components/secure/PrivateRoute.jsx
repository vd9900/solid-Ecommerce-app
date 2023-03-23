import { Route, Navigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

export const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated ? (
        <Route {...rest} element={element} />
      ) : (
        <Navigate to="/welcome" replace />
      )}
    </>
  );
};
