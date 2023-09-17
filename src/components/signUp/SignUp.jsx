"use client";

import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import Button from "../button/Button";

const api_url = process.env.API_URL;

const SignUp = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const initialValues = {
        firstName: "",
        email: "",
        terms: false,
        lastName: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object({
        lastName: Yup.string()
            .max(20, "Ton prénom doit contenir moins de 20 caractères")
            .required("Votre nom est requis"),
        firstName: Yup.string()
            .max(20, "Votre Prénom doit contenir moins de 20 caractères")
            .required("Votre Prénom est requis"),
        email: Yup.string().required("Invalid email adress"),
        terms: Yup.boolean()
            .oneOf([true], "Checkbox must be checked")
            .required("Coche cette case"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const handleSignUp = async (values) => {
        setError("");
        setLoading(true);

        try {
            const response = await axios.post(
                `${api_url}/auth/signup`,
                values
            );

            if (response.status === 200) {
                console.log("Enregistrement réussi !", response.data);
                toast.success("Votre compte a bien été créé !");
            } else {
                throw new Error(response.data.message || "Échec de l'enregistrement");
            }
        } catch (error) {
            setError(
                error.message ||
                "Une erreur s'est produite lors de l'enregistrement. Veuillez réessayer plus tard."
            );
            toast.error("Erreur lors de la création de votre compte");
            console.log(error);
        }

        setLoading(false);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSignUp,
    });

    return (
        <section className="w-full px-3 text-white">
            <h1 className="text-2xl sm:text-center font-bold pb-10 lg:text-4xl lg:text-left">
                Inscription
            </h1>
            <form
                onSubmit={formik.handleSubmit}
                className=" flex flex-col items-center space-y-4 "
            >
                <div className="flex flex-col lg:flex-row w-full lg:space-x-3">
                    <div className="flex flex-col items-center lg:items-start space-y-3 w-full">
                        <label htmlFor="lastName">Nom*</label>
                        <input
                            id="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className="input w-full"
                            placeholder="Nom"
                        />
                        <p className="text-red-500">
                            {formik.touched.lastName && formik.errors.lastName
                                ? formik.errors.lastName
                                : ""}
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start pt-5  space-y-3  w-full lg:pt-0">
                        <label htmlFor="firstName">Prénom</label>
                        <input
                            id="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            type="text"
                            className="input w-full"
                            placeholder="Prénom"
                            onBlur={formik.handleBlur}
                        />
                        <p className="text-red-500">
                            {formik.touched.firstName && formik.errors.firstName
                                ? formik.errors.firstName
                                : ""}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-3 w-full">
                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        type="email"
                        className="h-10 text-black rounded-lg pl-4 max-w-[616px] lg:max-w-full w-full"
                        placeholder="E-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <p className="text-red-500">
                        {formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : ""}
                    </p>
                </div>
                <div className="flex flex-col items-center lg:flex-row w-full lg:space-x-3">
                    <div className="flex flex-col items-center lg:items-start space-y-3 w-full">
                        <label htmlFor="password">Mot de passe*</label>
                        <input
                            id="password"
                            type="password"
                            className="input w-full"
                            placeholder="Mot de passe"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <p className="text-red-500">
                            {formik.touched.password && formik.errors.password
                                ? formik.errors.password
                                : ""}
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start pt-5 space-y-3 w-full lg:pt-0">
                        <label htmlFor="confirmPassword">Corfirmation*</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className="input w-full"
                            placeholder="Mot de passe"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        <p className="text-red-500">
                            {formik.touched.confirmPassword && formik.errors.confirmPassword
                                ? formik.errors.confirmPassword
                                : ""}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center pt-5 space-x-3 w-full lg:pt-0">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={formik.values.terms}
                            onChange={formik.handleChange}
                            className="cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-lg">
                            J’accepte les conditions générales d’utilisation
                        </label>
                    </div>
                    <p className="text-red-500">
                        {formik.touched.terms && formik.errors.terms
                            ? formik.errors.terms
                            : ""}
                    </p>
                </div>
                <div className="flex justify-center">
                    <Button type="submit" title={"S'inscrire"} className="mt-4"/>
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
    );
};

export default SignUp;
