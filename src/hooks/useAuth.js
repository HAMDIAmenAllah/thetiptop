// useAuth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // hook useRouter
  const router = useRouter();

  const checkAuthentication = () => {
    // Vérifier si l'utilisateur est déjà authentifié (par exemple, si un jeton est présent dans le local storage)
    const token = localStorage.getItem("token");

    setIsAuthenticated(!!token); // Définir isAuthenticated sur true si le jeton existe, false sinon
  };
  useEffect(() => {
    checkAuthentication(); // Vérifier l'authentification lors du chargement initial

    const handleStorageChange = (event) => {
      if (event.key === "token") {
        checkAuthentication(); // Mettre à jour l'état isAuthenticated lorsque le token est modifié
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Fonction pour gérer la déconnexion
  const logout = () => {
    localStorage.removeItem("token"); // Supprimer le jeton du local storage lors de la déconnexion
    setIsAuthenticated(false); // Mettre à jour l'état isAuthenticated à false
    window.location.href = "/login";
    // router.push("/login");
  };

  return { isAuthenticated, logout, setIsAuthenticated };
};

export default useAuth;
