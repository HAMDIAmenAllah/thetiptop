"use client";
import { Dialog, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { Fragment, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ModalNewsLetters = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cancelButtonRef = useRef(null);
  const api_url = process.env.API_URL;
  useEffect(() => {
    try {
      const popup = localStorage.getItem('popup');
      localStorage.removeItem("popup");
      // console.log('teste popup is :', popup);
      if (popup && popup) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    } catch (error) {

    }

  }, [])


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api_url}/newsletter/add`, {
        email: email,
      });
      setResponseMessage(response.data.detail);
      // console.log('ca marche');
      toast.success("Vous êtes désormais inscrit à nos newsletters");
      // console.log(responseMessage);
      console.log(response);
      const popup = "registered";
      localStorage.setItem("popup", popup);
      setOpen(false)

    } catch (error) {
      setResponseMessage(error.response.data.detail);
      console.error(error.response.data.detail);
      toast.error("Échec : Cette adresse e-mail est déjà enregistrée !");

      // console.error("Error fetching data:", error);
    }
  };
  const truncatedText = "En cochant cette case vous acceptez nos conditions générales...";
  const fullText = "En cochant cette case vous acceptez nos conditions générales, vous acceptez également de recevoir toutes nos newsletters à savoir nos offres plus les promotions de la gamme ThéTipTop.";

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-gray-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> */}
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          NewsLetters
                        </Dialog.Title>
                        <div className="text-sm leading-6">
                          <fieldset>
                            <div className="mt-6 space-y-6">
                              <div className="relative flex gap-x-3">
                                <form onSubmit={handleSubmit} className="flex flex-col text-sm leading-6">
                                  {/* <label htmlFor="email" className="text-sm">E-mail</label> */}
                                  <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="h-10 text-black rounded-lg pl-4"
                                    placeholder="exemple@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                  <div className="flex flex-col mt-2">
                                    <div className="flex flex-row gap-x-2">
                                      <div className="mt-1"><input id="acceptConditions" type="checkbox" required className="h-4 w-4 rounded border-gray-300" /></div>
                                      <div><label htmlFor="acceptConditions" className="font-medium text-black"> Cochez cette case pour vous s’inscrire à notre newsletter </label></div>
                                    </div>
                                    <div>
                                      <p className="text-black">
                                        {isExpanded ? fullText : truncatedText}
                                      </p>

                                      {!isExpanded && (
                                        <button
                                          type="button"
                                          className="modal-button font-semibold inline-flex text-sm text-gray-700 hover:underline"
                                          onClick={toggleExpand}
                                        >
                                          <span className="sr-only">Suivant</span>Lire la suite
                                          <ChevronRightIcon className="h-5 w-5 mt-0.5" aria-hidden="true" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                      type="submit"
                                      className="inline-flex w-full justify-center rounded-md bg-greenTip px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gr sm:ml-3 sm:w-auto hover:bg-greenTipHover"
                                    // onClick={() => handleSend(email)}
                                    >
                                      Envoyer
                                    </button>
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                                      onClick={() => setOpen(false)}
                                      ref={cancelButtonRef}
                                    >
                                      Annuler
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
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
  )
}

export default ModalNewsLetters;
