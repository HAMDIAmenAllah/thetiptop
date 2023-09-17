"use client";

import { useEffect } from "react";
import Link from "next/link";

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Afficher un message d'alerte si le token n'est pas présent
      // ou afficher le contenu de la page si l'utilisateur est connecté
      console.log("connectez vous");
    }
  }, []);

  // Vérifier si le code s'exécute côté client (navigateur)
  const isClient = typeof window !== "undefined";

  return (
    <section className="flex justify-center items-center ">
      {isClient && localStorage.getItem("token") ? (
        // Si l'utilisateur est connecté, afficher le contenu de la page
        children
      ) : (
        // Si l'utilisateur n'est pas connecté, afficher le message d'alerte avec le lien vers la page de connexion
        <div className="flex justify-center text-center text-white text-2xl px-3 mt-20">
          <p>
            Connectez-vous pour accéder à cette page.{" "}
            <Link href="/login" className="underline underline-offset-1">
              Se connecter
            </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default ProtectedRoute;
