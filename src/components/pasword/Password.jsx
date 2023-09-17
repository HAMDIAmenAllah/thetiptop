"use client";
import React, { useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";


// import custon component
import Button from "../button/Button";


const Password = () => {
  const api_url = process.env.API_URL;
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log('Token from localStorage:', token);
  // }, []);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmpassword: "",
      oldPassword: ""
    },

    // validate Form
    validationSchema: Yup.object({
      newPassword: Yup.string(),
      oldPassword: Yup.string()
        .min(6, "Votre mot de passe doit être composé de 10 caractères")
        .required("Mot de passe requis")
        .min(6, "Votre mot de passe doit être composé de 10 caractères")
        .required("Mot de passe requis"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Vos mots de passe ne correspondent pas")
        .required("Confirmation de mot de passe requis"),
    }),

    // submit form
    onSubmit: async (values) => {
      console.log(values);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${api_url}/auth/update`, values, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response.data);
        toast.success("Mot de passe mis à jour  !");
        document.getElementById("postCodeForm").reset();

      } catch (error) {
        toast.error("Ancien mot de passe incorrecte !");
        console.error("Error updating password:", error.response.data) // Log full error response

      }
    },
  });

  return (
    <section className="w-full px-3 text-white">
      <form
        id="postCodeForm"
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-w-[617px] mx-auto justify-center space-y-4"
      >
        <div className="flex flex-col space-y-3 w-full">
          <label htmlFor="">Ancien mot de passe *</label>
          <input
            id="oldPassword"
            type="password"
            className="input"
            placeholder="Votre mot de passe actuel"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="text-red-500">
            {formik.touched.oldPassword && formik.errors.oldPassword
              ? formik.errors.oldPassword
              : ""}
          </p>
        </div>
        <div className="flex flex-col space-y-3 w-full">
          <label htmlFor="">Mot de passe *</label>
          <input
            id="newPassword"
            type="password"
            className="input"
            placeholder="Votre nouveau mot de passe"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="text-red-500">
            {formik.touched.newPassword && formik.errors.newPassword
              ? formik.errors.newPassword
              : ""}
          </p>
        </div>
        <div className="flex flex-col space-y-3 w-full">
          <label htmlFor="">Confirmation du mot de passe *</label>
          <input
            id="confirmpassword"
            type="password"
            className="input"
            placeholder="Confirmation de mot de passe"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
          />
          <p className="text-red-500">
            {formik.touched.confirmpassword && formik.errors.confirmpassword
              ? formik.errors.confirmpassword
              : ""}
          </p>
        </div>
        <div className="flex justify-center">
          <Button type="submit" title={"Modifier mon mot de passe"} className="bg-greenTip px-8 rounded-full text-sm md:text-xl lg:text-xl mt-[1px] " />
        </div>
      </form>


      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </section>
  )
}

export default Password