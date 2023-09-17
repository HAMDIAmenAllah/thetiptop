"use client";

import axios from "axios";
import Image from "next/image";
import React, {useState} from "react";
import Button from "../button/Button";

const Quiz = () => {
    const [showModal, setShowModal] = useState(false);
    const [ticketInput, setTicketInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [succesMessage, setSuccesMessage] = useState({
        message: '',
        gainId: '',
        gainValue: ''
    });
    const token = localStorage.getItem("token");
    console.log(token);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://api.dsp-archiwebo21a-nd-ah-ecs-aa.fr/api/ticket/user",
                {codeTicket: ticketInput},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.message === "Gagnant !") {
                setSuccesMessage({
                    message: `Vous avez gagné ${response.data.gainValue} ! Allez récupérer votre cadeau dans une de nos boutiques pas loin de chez vous !`,
                    gainId: response.data.gainId,
                    gainValue: response.data.gainValue
                });
            }
        } catch (error) {
            const errorMessage = error.response.data.message;
            switch (errorMessage) {
                case "Ticket expiré":
                    setErrorMessage("Le ticket rentré est déjà utilisé ou expiré, essayez un autre !");
                    break;
                case "Ticket déjà pris":
                    setErrorMessage("Le ticket rentré est déjà utilisé ou expiré, essayez un autre !");
                    break;
                case "Ticket déjà utilisé":
                    setErrorMessage("Vous avez déjà joué ce ticket, essayez un autre !");
                    break;
                default:
                    setErrorMessage("Erreur sur le ticket rentré, essayez un autre !");
            }
        }
    };

    return (
        <section className="w-full  flex justify-center items-center px-4 pt-20">
            <div className="text-center max-w-4xl flex flex-col space-y-10">
                <div className="flex justify-center items-center space-x-5 lg:space-x-10">
                    <h1 className="text-2xl text-white font-bold lg:text-5xl">
                        TENTE TA CHANCE
                    </h1>
                    <Image
                        src="/assets/icons/icons-the.svg"
                        width={50}
                        height={50}
                        alt="Ceci est une image d'une tasse thé"
                    />
                </div>
                <p className="text-xl max-w-4xl text-white font-normal">
                    Avoir un de nos tickets de caisse suffit pour participer à ce jeu
                    concours, personne n’est perdant, vous êtes 100% gagnant. Il est à
                    présent temps de rentrer le numéro de ton ticket de caisse juste en
                    dessous.
                </p>
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center w-full space-y-12"
                >
                    <label htmlFor="">
                        <input
                            type="text"
                            value={ticketInput}
                            onChange={(e) => setTicketInput(e.target.value)}
                            placeholder="T050323-TC123"
                            className="text-center w-full max-w-[641px] h-14 rounded-lg"
                        />
                    </label>
                    <p className="invalid:visible text-red-700 text-xl">{errorMessage}</p>
                    <p className="valid:visible text-green-700 text-2xl">{succesMessage.message}</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-white font-normal underline underline-offset-1"
                    >
                        Règle du jeu concours
                    </button>
                    <Button
                        title={"Jouer"}
                        className="max-w-[191px] mx-auto text-white font-semibold"
                    />
                </form>
            </div>
            {showModal && (
                <div
                    className="fixed h-screen w-full  inset-0 bg-black bg-opacity-75 flex justify-end items-center z-50">
                    <div className="bg-white w-full max-w-[600px] h-full  p-6 ">
                        <div className="flex items-center justify-between text-4xl font-bold pt-10">
                            <h1>RÈGLE DU JEU CONCOURS</h1>
                            <button onClick={() => setShowModal(false)}>X</button>
                        </div>
                        <div className="pt-10 space-y-8">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Quiz;
