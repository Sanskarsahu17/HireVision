// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isInInterview, setIsInInterview] = useState(false);

  const checkAuth = () => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAuthenticated(true);
        setUserRole(decoded.role || "candidate");
        // console.log(decoded);
        return true;
      } catch (error) {
        console.error("Token validation failed:", error);
        logout();
        return false;
      }
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
      return false;
    }
  };

  useEffect(() => {
    checkAuth();

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (token, role) => {
    Cookies.set("token", token);
    setIsAuthenticated(true);
    setUserRole(role);
    checkAuth(); // Validate token after setting
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("isInInterview");
    setIsAuthenticated(false);
    setUserRole("");
    setIsInInterview(false);
    navigate("/auth");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        isInInterview,
        login,
        logout,
        checkAuth, // Export checkAuth for components that need to verify auth status
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
