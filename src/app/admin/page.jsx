"use client";

import NavbarAdmin from "../../components/NavbarAdmin";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Admin = ({ children }) => {
  const router = useSearchParams();
  const data = router.query;

  console.log(router, "router");
  return (
    <div className="w-full min-screen flex flex-col justify-center items-center">
      <NavbarAdmin />
      <div>{children}</div>
    </div>
  );
};

export default Admin;
