import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const LogoutPage = ({ onLogout }: { onLogout: () => void }) => {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to="/login" replace />;
};

export default LogoutPage;
