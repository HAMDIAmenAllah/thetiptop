"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const FiltreNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-10 w-full max-w-[1560px] mx-auto text-white pt-0 pb-10 hidden lg:block">
      {/* div main */}
      <section className="flex w-full items-center justify-between lg:flex-row lg:justify-center">
        {/* logo */}
        <span className="-space-x-px overflow-hidden rounded-md border shadow-sm">
          <ul className="flex items-center space-x-8 customUl py-3">
            <li className="text-center">
              <Link href="/administration/historiqueDesGains" className={pathname == "/administration/historiqueDesGains" ? "activee" : ""}>
                Historique des gains
              </Link>
            </li>
            <li>
              <Link
                href="/administration/statistiquesDuJeuConcours"
                className={pathname == "/administration/statistiquesDuJeuConcours" ? "activee" : ""}
              >
                Statistiques du jeu concours
              </Link>
            </li>
            <li>
              <Link
                href="/administration/detailsDuCompte"
                className={pathname == "/administration/detailsDuCompte" ? "activee" : ""}
              >
                Détail du compte
              </Link>
            </li>
            <li>
              <Link
                href="/administration/motDePasse"
                className={pathname == "/administration/motDePasse" ? "activee" : ""}
              >
                Mot de passe
              </Link>
            </li>
            <li>
              <Link
                href="/administration/newsletter"
                className={pathname == "/administration/newsletter" ? "activee" : ""}
              >
                Newsletter
              </Link>
            </li>
          </ul>
        </span>
      </section>
    </nav>
  );
};

export default FiltreNavbar;
