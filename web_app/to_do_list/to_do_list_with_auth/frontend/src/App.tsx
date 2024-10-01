import { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ToDoPage from "./components/ToDoPage";
import LogoutPage from "./components/LogoutPage";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setIsUserLoggedIn(isAuthenticated);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsUserLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isUserLoggedIn ? <ToDoPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={
            isUserLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <SignUpPage setIsUserLoggedIn={setIsUserLoggedIn} />
            )
          }
        />
        <Route
          path="/login"
          element={
            isUserLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <LoginPage setIsUserLoggedIn={setIsUserLoggedIn} />
            )
          }
        />
        <Route
          path="/logout"
          element={<LogoutPage onLogout={handleLogout} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
