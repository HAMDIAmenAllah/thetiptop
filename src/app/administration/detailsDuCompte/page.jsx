"use client";
import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// import custon component
import Button from "@/components/button/Button";
import AccountDetails from "@/components/accountDetails/AccountDetails";
import User from "@/components/user/User";

const DetailsDuCompte = () => {
  // console.log(formik.values);

  return (
    <section className="w-full max-w-[1560px] mx-auto">
      <div className="lg:px-10  flex flex-col space-y-10 lg:flex-row lg:justify-center w-full lg:space-y-0">
        <FiltreNavbar />
      </div>
      <div className="w-full  px-3 text-white">
        <AccountDetails />
      </div>
      <div className="w-full  px-3 text-white">
        <User /> 
      </div>

    </section>
  );
};

export default DetailsDuCompte;
