"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="max-w-[1560px] pt-20 mx-auto space-y-3 w-full py-4 px-4 md:px-10 text-white font-medium flex flex-col justify-center md:space-y-0 md:flex-row md:justify-between lg:pt-5">
      <div>
        <p>Copyright © 2023 - Design by notre super team 🚀</p>
      </div>
      {/* <div>CGU | Politiques de confidentialité | Mentions légales</div> */}
      <div>
        <ul>
          <li>
            <Link href="/mentionsLegales" className={pathname == "/mentionsLegales" ? "activeee" : ""}>
              Mentions légales
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
