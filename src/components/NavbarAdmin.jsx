import Link from "next/link";
import React from "react";

const NavbarAdmin = () => {
  return (
    <nav className="text-white flex space-x-5">
      <Link href={"/admin/antho"}>Admin</Link>
      <Link href={"/admin/antha"}>amen</Link>
      <Link href={"/admin/antho"}>antho</Link>
    </nav>
  );
};

export default NavbarAdmin;
