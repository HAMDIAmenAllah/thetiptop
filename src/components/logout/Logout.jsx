"use client";

import useAuth from "@/hooks/useAuth";
import React from "react";

const Logout = ({ toggle, onLogout }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    onLogout(); // Appeler la fonction onLogout pour gérer la déconnexion
    toggle(); // Basculer le menu après la déconnexion si nécessaire
    setIsAuthenticated(false);
  };
  return (
    <div>
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="bg-greenTip py-2 px-5 text-white rounded-full"
        >
          Deconnexion
        </button>
      ) : null}
    </div>
  );
};

export default Logout;
