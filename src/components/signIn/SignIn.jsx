"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Button from "../button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import getGoogleUrls from "@/utils/getGoogleUrls";
import Input from "@/reusable-ui/Input";
import useAuth from "@/hooks/useAuth";

const api_url = process.env.API_URL;

const SignIn = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { setIsAuthenticated, isAuthenticated } = useAuth();
    const [error, setError] = useState("");

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().required("Invalid email address"),
        password: Yup.string()
            .min(4, "Password must be at least 5 characters")
            .required("Password is required"),
    });

    const handleSignIn = async (values) => {
        setLoading(true);


        try {
            const response = await axios.post(
                `${api_url}/auth/login`,
                values
            );

            if (response.status === 200) {
                const data = response.data;
                const token = data.token;
                toast.success("Vous êtes connecté !");
                localStorage.setItem("token", token);
                setIsAuthenticated(true);
                // Assurez-vous que setIsAuthenticated est bien accessible ici
                // console.log("Authenticated status:", isAuthenticated);q
                window.location.href = "/";
                // router.push("/");
            } else {
                setError(response.data.message || "Échec de la connexion");
            }
        } catch (error) {
            console.log(
                error,
                "Une erreur s'est produite. Veuillez réessayer plus tard."
            );
            setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
        }

        setLoading(false);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSignIn,
    });

    return (
        <section className="w-full  px-3 text-white">
            <h1 className="text-2xl sm:text-center lg:text-left font-bold pb-10 lg:text-4xl">
                Connexion
            </h1>
            <form
                onSubmit={formik.handleSubmit}
                action=""
                className="flex flex-col space-y-4 "
            >
                <div>
                    <Input
                        label={"Email*"}
                        id="email"
                        type="email"
                        className="h-10 text-black rounded-lg pl-4 max-w-[616px] w-full"
                        placeholder="E-mail"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 w-full text-center lg:text-start pt-3">
                            {formik.errors.email}
                        </p>
                    )}
                </div>
                <div>
                    <Input
                        label={"Mot de passe*"}
                        id="password"
                        type="password"
                        className="input w-full"
                        placeholder="Mot de passe"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 w-full text-center lg:text-start pt-3">
                            {formik.errors.password}
                        </p>
                    )}
                </div>
                {error && (
                    <p className="text-red-500 w-full text-center lg:text-start pt-3">
                        {error}
                    </p>
                )}
                <div className="flex items-center justify-center">
                    <Button title={"Se connecter"} type="submit" className="mt-4" />
                </div>
            </form>
            <div className="flex justify-center items-center space-x-4 mt-10">
                <button className="flex items-center space-x-3 py-1 bg-white px-2 rounded-lg">
                    <span className=" text-grayBackground font-normal text-sm md:text-xl">
                        Se connecter avec
                    </span>
                    <FaFacebook className="text-blue-500" />
                </button>
                <button className="flex items-center space-x-3 bg-white px-2 py-1 rounded-lg">
                    <a
                        className="text-grayBackground  font-normal text-sm md:text-xl"
                        href={getGoogleUrls}
                    >
                        Se connecter avec
                    </a>
                    <FcGoogle />
                </button>
            </div>

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

export default SignIn;
