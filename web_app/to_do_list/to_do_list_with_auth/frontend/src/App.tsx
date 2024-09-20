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

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setIsUserLoggedIn(isAuthenticated);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isUserLoggedIn ? <ToDoPage /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
