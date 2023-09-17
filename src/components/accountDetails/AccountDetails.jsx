"use client";
import FiltreNavbar from "@/components/filtreNavbar/FiltreNavbar";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";

// import custon component
import Button from "../button/Button";
import useAuth from "@/hooks/useAuth";
import { isEmpty } from "lodash";
import toast, { Toaster } from "react-hot-toast";

const defaultInitialValues = {
  lastName: "",
  email: "",
  firstName: "",
  phone: "",
  city: "",
  country: "",
  zipCode: "",
  address: "",
  additionalAddress: "",
}
const AccountDetails = () => {
  let initialValues = defaultInitialValues;
  const [userData, setUserData] = useState();
  const api_url = process.env.API_URL;
  // console.log('token', token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${api_url}/auth/info-user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setUserData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  if (userData) {
    initialValues = userData;
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    lastName: Yup.string()
      .required("Le nom est obligatoire !")
      .max(20, "Votre nom doit contenir moins de 20 caractères")
      .min(3, "Votre nom ne doit pas contenir moins de 3 caractères")
      .required("Votre nom est requis"),
    firstName: Yup.string()
      .required("Le prénom est obligatoire !")
      .max(20, "Votre Prénom doit contenir moins de 20 caractères")
      .min(3, "Votre Prénom ne doit pas contenir moins de 3 caractères")
      .required("Votre Prénom est requis"),
    email: Yup.string().required("l'adresse email n'est pas valide"),
    phone: Yup.string().matches(phoneRegExp, 'Le numéro de téléphone n\'est pas valide'),
    country: Yup.string()
      .max(20, "Votre pays doit contenir moins de 20 caractères")
      .min(3, "Votre pays ne doit pas contenir moins de 3 caractères")
    ,
    city: Yup.string().max(
      20,
      "votre ville doit contenir moins de 20 caractères"
    )
      .min(3, "Votre ville ne doit pas contenir moins de 3 caractères"),
    zipCode: Yup.string()
      .min(5, "Le code postal doit être composé de 5 chiffres minimum")
      .max(5, "Le code postal doit être composé de 5 chiffres maximum")
      .matches(/^[0-9]{5}$/, "Code postal invalide"),
    address: Yup.string().max(
      50,
      "votre adresse doit contenir moins de 50 caractères"
    )
      .min(3, "Votre adresse ne doit pas contenir moins de 3 caractères"),
    additionalAddress: Yup.string().max(
      20,
      "votre complément d'adresse doit contenir moins de 20 caractères"
    )
      .min(3, "Votre complément d'adresse ne doit pas contenir moins de 3 caractères"),
  });
  const enableReinitialize = !isEmpty(userData)
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: enableReinitialize,
    validationSchema,

    onSubmit: async (values) => {
      console.log(values)
      try {
        const token = localStorage.getItem('token');
        await axios.put(`https://api.dsp-archiwebo21a-nd-ah-ecs-aa.fr/api/auth/update`, values, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log("Data updated successfully")
        toast.success("Données modifiées !");
      } catch (error) {
        console.error("Error updating data:", error.response.data)
        setError(response.data.message || "Échec de la modification");
      }
    }
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-w-[617px] mx-auto justify-center space-y-4"
      >
        <div className="flex flex-col  space-y-6 ">
          <div className="flex flex-col  lg:flex-row w-full lg:space-x-3">
            <div className="flex flex-col space-y-3 w-full">
              <label htmlFor="lastName">Nom*</label>
              <input
                {...formik.getFieldProps('lastName')}
                onBlur={formik.handleBlur}
                type="text"
                id="lastName"
                className="input"
                placeholder="Nom"
              />
              <p className="text-red-500">
                {formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ""}
              </p>
            </div>
            <div className="flex flex-col pt-5  space-y-3  w-full lg:pt-0">
              <label htmlFor="firstName">Prénom*</label>

              <input
                {...formik.getFieldProps('firstName')}
                className="input"
                placeholder="Prénom"
                id="firstName"
                onBlur={formik.handleBlur}
              />
              <p className="text-red-500">
                {formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row w-full lg:space-x-3">
          <div className="flex flex-col space-y-3 w-full">
            <label htmlFor="email">Email*</label>
            <input
              {...formik.getFieldProps('emil')}
              className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={true}
            />
            <p className="text-red-500">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </p>
          </div>

          <div className="flex flex-col space-y-3 w-full">
            <label htmlFor="phone">Téléphone</label>
            <input
              {...formik.getFieldProps('phone')}
              type="text"
              className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full"
              id="phone"
              placeholder="Téléphone"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500">
              {formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row w-full lg:space-x-3">
          <div className="flex flex-col space-y-3">
            <label htmlFor="country">Pays</label>
            <input
              {...formik.getFieldProps('country')}
              type="text"
              className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full"
              id="country"
              placeholder="Pays"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500">
              {formik.touched.country && formik.errors.country
                ? formik.errors.country
                : ""}
            </p>
          </div>

          <div className="flex flex-col space-y-3 w-full">
            <label htmlFor="city">Ville</label>
            <input
              {...formik.getFieldProps('city')}
              type="text"
              className="h-10 text-black rounded-lg pl-4 w"
              placeholder="Ville"
              id="city"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500">
              {formik.touched.city && formik.errors.city
                ? formik.errors.city
                : ""}
            </p>
          </div>
          <div className="flex flex-col space-y-3 w-full">
            <label htmlFor="zipCode">Code postal</label>
            <input
              {...formik.getFieldProps('zipCode')}
              type="text"
              className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full"
              placeholder="Code postal"
              id="zipCode"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500">
              {formik.touched.zipCode && formik.errors.zipCode
                ? formik.errors.zipCode
                : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row w-full lg:space-x-3">
          <div className="flex flex-col space-y-3 w-full">
            <label htmlFor="">Adresse</label>
            <input
              {...formik.getFieldProps('address')}
              type="text"
              className="input"
              placeholder="Addresse"
              onBlur={formik.handleBlur}
              id="address"
            />
            <p className="text-red-500">
              {formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ""}
            </p>
          </div>
          <div className="flex flex-col pt-5 space-y-3 w-full lg:pt-0">
            <label htmlFor="">Complément d'adresse</label>
            <input
              {...formik.getFieldProps('additionalAddress')}
              type="text"
              className="input"
              placeholder="Complément d'adresse"
              onBlur={formik.handleBlur}
              id="additionalAddress"
            />
            <p className="text-red-500">
              {formik.touched.additionalAddress && formik.errors.additionalAddress
                ? formik.errors.additionalAddress
                : ""}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" title={"Mettre à jour"} className="mt-4" />
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
    </>
    // <div className="fixed bottom-0 w-full hidden lg:block" style={{zIndex: -1}}>
    //   <Image
    //     src="/assets/images/img-footer-login.svg"
    //     width={1560}
    //     height={952}
    //     alt="img elements"
    //     className="relative"
    //   />
    // </div>
  )
}

export default AccountDetails;